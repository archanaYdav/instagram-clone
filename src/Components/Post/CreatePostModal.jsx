import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import "./CreatePostModal.css";
import { storage, db } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import firebase from 'firebase/compat/app';

export default function CreatePostModal({ onClose, isOpen, username, userId}) {
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState("");
    const [location, setLocation] = useState("");


    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }

    const handleDragLeave = () => {
        setIsDragOver(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            setFile(droppedFile);
        }
    }

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file);
        } else {
            setFile(null);
            alert("please Select an image or video");
        }
    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    }

    const handleUpload = () => {

        if (file === null) {
            setFile(null);
            alert("File is not selected. Please select a file and try again");
            return;
        }

        console.log(file);
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

        }, (error) => {
            console.log(error);
            alert(error.message);
        }, () => {
            // Handle successful uploads on complete
            getDownloadURL(storageRef).then((downloadURL) => {
                db.collection('posts').add({
                    caption: caption,
                    imageUrl: downloadURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    username: username,
                    location: location
                });

                db.collection("users").doc(userId).collection("userDetails").add({
                    url: downloadURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                  });

                setFile(null);
                setCaption("");
                setLocation("");
                alert("Your post has been shared.");
            });
        });
    };

    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between items-center py-1 px-10 '>
                        <p>Create New Post</p>
                        <Button variant={"ghost"} size={"sm"} colorScheme={"blue"} onClick={handleUpload}>Share</Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div className='h-[70vh] flex justify-between pb-5'>
                            <div className="w-[50%] flex items-center justify-center">
                                {!file && <div className='center text-center'>
                                    <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className='drag-drop h-full'>
                                        <div className="flex flex-col justify-center items-center">
                                            <FaPhotoVideo className='text-3xl' />
                                            <p>Drag Photos or videos here</p>
                                        </div>
                                        <label htmlFor="file-upload" className='custom-file-upload rounded-md'>Select From Computer</label>
                                        <input type='file' id='file-upload' accept='image/*, video/*' onChange={handleOnChange} />
                                    </div>
                                </div>}

                                {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt='fileisflie' />}
                            </div>

                            <div className="w-[1px] border h-full"></div>

                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img className="w-7 h-7 rounded-full" src='https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg' alt='fadf' />
                                    <p className='font-semibold ml-4'>{username}</p>
                                </div>
                                <div className='px-2'>
                                    <textarea value={caption} onChange={handleCaptionChange} placeholder='Write a caption' className='captionInput' name="caption" rows="8"></textarea>
                                </div>
                                <div className='flex justify-between px-2'>
                                    <GrEmoji />
                                    <p className='opacity-70'>{caption?.length}/2,200</p>
                                </div>
                                <hr />

                                <div className='p-2 flex justify-between items-center'>
                                    <input value={location} onChange={(e) => setLocation(e.target.value)} className='locationInput' placeholder='location' name='location' />
                                    <GoLocation />
                                </div>
                                <hr />
                            </div>
                        </div>

                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

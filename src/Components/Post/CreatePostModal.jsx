import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import "./CreatePostModal.css";

export default function CreatePostModal({ onClose, isOpen }) {
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();
    const [caption, setCaption] = useState("");

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

    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between items-center py-1 px-10 '>
                        <p>Create New Post</p>
                        <Button variant={"ghost"} size={"sm"} colorScheme={"blue"}>Share</Button>
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
                                    <p className='font-semibold ml-4'>username</p>
                                </div>
                                <div className='px-2'>
                                    <textarea onChange={handleCaptionChange} placeholder='Write a caption' className='captionInput' name="caption" rows="8"></textarea>
                                </div>
                                <div className='flex justify-between px-2'>
                                    <GrEmoji />
                                    <p className='opacity-70'>{caption?.length}/2,200</p>
                                </div>
                                <hr />

                                <div className='p-2 flex justify-between items-center'>
                                    <input className='locationInput' placeholder='location' name='location'/>
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

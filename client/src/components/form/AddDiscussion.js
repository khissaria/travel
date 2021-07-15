import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { useLocation } from "react-router-dom";
import { createDiscussion, editDiscussion } from '../../actions/location'

const AddDiscussion = () => {
    const { state } = useLocation();
    const dispatch = useDispatch();
    let locationID, locationName, discussion,discussionId;
    if (state.data) {
        discussion = state.data;
        discussionId=state.data._id;
        locationName = state.name;
    }
    else if (state.id) {
        locationID = state.id;
        locationName = state.name;

    }
    const [discussionData, setDiscussionData] = useState({
        locationId: '',
        title: '',
        description: '',
        imgFile: '',
        createdBy: ''
    });


    const clear = () => {

        setDiscussionData({

            locationId: '',
            title: '',
            description: '',
            imgFile: '',
            createdBy: ''
        });
    }

    useEffect(() => { setDiscussionData({ ...discussionData, locationId: locationID }) }, [locationID]);

    useEffect(() => {

        if (discussion) {
            setDiscussionData({ ...discussionData,locationId:discussion.locationId, title: discussion.title, description: discussion.description, createdBy: discussion.createdBy, imgFile: discussion.imgFile });

        }
    }, [discussion]);





    const handleSubmitDiscussion = (e) => {
        e.preventDefault();
        if (discussion) {
            dispatch(editDiscussion(discussionId, discussionData));
            alert('things2do updated successfully');
        }
        else {
            dispatch(createDiscussion(discussionData));
            alert('things2do added successfully');
        }
        clear();
        window.location='/locations'
    }

    return (<>
        <div className="w-full border-l-2 px-4 " >
            <div className="mt-10">
                <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmitDiscussion} method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Location name
                                            </label>
                                            <input
                                                type="text"
                                                name="locationName"
                                                id="locationName"
                                                value={locationName}
                                                disabled
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                required
                                                value={discussionData.title} onChange={(e) => setDiscussionData({ ...discussionData, title: e.target.value })}
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Description
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    required
                                                    onChange={(e) => setDiscussionData({ ...discussionData, description: e.target.value })}
                                                    rows={3}
                                                    value={discussionData.description}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="Description"

                                                />
                                            </div>

                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">Image</label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >

                                                            <FileBase type="file" value={discussionData.imgFile} multiple={false} onDone={({ base64 }) => setDiscussionData({ ...discussionData, imgFile: base64 })} />

                                                        </label>

                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        {discussion ? 'Update' : 'Save'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>


        </div>
    </>
    )

}

export default AddDiscussion;
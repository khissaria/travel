import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLocation } from '../../actions/location'
import FileBase from 'react-file-base64';


const AddLocation = () => {

    const dispatch = useDispatch();

    const [locationData, setLocationData] = useState({
        name: '',
        state: '',
        country: '',
        description: '',
        imgFile: ''
    });

    const clear = () => {
        setLocationData({
            name: '',
            state: '',
            country: '',
            description: '',
            imgFile: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createLocation(locationData));
        clear();

    }
    return (<>

        <div className="w-full border-l-2 px-4 " >
            <div className="mt-10">
                <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit} method="POST">
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
                                                required
                                                value={locationData.name}
                                                onChange={(e) => setLocationData({ ...locationData, name: e.target.value })}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                State name
                                            </label>
                                            <input
                                                type="text"
                                                name="StateName"
                                                id="StateName"
                                                required
                                                value={locationData.state}
                                                onChange={(e) => setLocationData({ ...locationData, state: e.target.value })}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country / Region
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                value={locationData.country}
                                                required
                                                onChange={(e) => setLocationData({ ...locationData, country: e.target.value })}
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option selected disabled defaultValue value=''>Select Country</option>
                                                <option value="India">India</option>
                                                <option value="USA">United States of America</option>
                                                <option value="Britain">Britain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Description
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    rows={3}
                                                    required
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="Description"
                                                    value={locationData.description}
                                                    onChange={(e) => setLocationData({ ...locationData, description: e.target.value })}
                                                    defaultValue={''}
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

                                                            <FileBase type="file" value={locationData.imgFile} multiple={false} onDone={({ base64 }) => setLocationData({ ...locationData, imgFile: base64 })} />
                                                        </label>

                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-12">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Add Location
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="false">
                <div className="py-10">
                    <div className="border-t border-gray-200" />
                </div>
            </div>




        </div>
    </>
    )
}

export default AddLocation;
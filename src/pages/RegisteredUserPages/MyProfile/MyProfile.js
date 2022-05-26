import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [displayName, setDisplayName] = useState('')
    const [bio, setBio] = useState('')
    const [countryName, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [image, setImage] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [linkedInProfile, setLinkedInProfile] = useState('')
    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState([])


    useEffect(() => {
        const url = `http://localhost:4000/user/${user.email}`
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    const handleProfileUpdate = event => {
        event.preventDefault()
        const userData = {
            displayName: user.displayName,
            bio: bio,
            country: countryName,
            city: city,
            image: image,
            phoneNumber: phoneNumber,
            linkedInProfile: linkedInProfile
        };
        const url = `http://localhost:4000/user/${user.email}`
        console.log(userData, url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('updated')
                // event.target.reset()
            })
    }
    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><FaUserCircle color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />My Profile</h3>
            <div className='flex p-4 mt-4 border-[2px] border-gray-200 rounded-[8px]'>
                <img className='mr-8 w-[120px] h-[120px] object-cover rounded-[20%]' src={user.photoURL} alt="" />
                <div>
                    <h1 className='text-[30px] font-[600]'>{user.displayName}</h1>
                    <p className='text-[20px] font-[500]'>{user.email}</p>
                </div>
            </div>
            <form onSubmit={handleProfileUpdate} className='product-form mt-4'>
                <div className="product-form-container grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="displayName">My Name</label>
                        <input onChange={e => setDisplayName(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="displayName" id="displayName" value={displayName || user.displayName} required />
                        <label htmlFor="bio">Bio</label>
                        <textarea onChange={e => setBio(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 h-[136px] border-[2px] border-[#e3e8eb]' type="text" name="bio" id="bio" cols="20" rows="10" value={bio || userData?.bio} required></textarea>
                    </div>
                    <div>
                        <label htmlFor="email">My Email</label>
                        <input className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="email" id="email" value={user.email} required />
                        <label htmlFor="country">Country</label>
                        <input onChange={e => setCountry(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="country" id="country" value={countryName || userData.country} required />
                        <label htmlFor="city">City</label>
                        <input onChange={e => setCity(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="city" id="city" value={city || userData.city} required />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input onChange={e => setPhoneNumber(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="number" name="phoneNumber" id="phoneNumber" value={phoneNumber || userData.phoneNumber} required />
                        <label htmlFor="image">Upload Product Thumbnail</label>
                        <input onChange={e => setImage(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="image" id="image" value={image || userData.image} required />
                    </div>
                </div>
                <label htmlFor="linkedInProfile">LinkedIn Profile</label>
                <input onChange={e => setLinkedInProfile(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="linkedInProfile" id="linkedInProfile" value={linkedInProfile || userData.linkedInProfile} required />
                <div className="text-right">
                    <input className='py-[10px] px-4 bg-primary rounded-[8px] text-white font-[500] active:border-[0px]' type="submit" value="Save Profile" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;
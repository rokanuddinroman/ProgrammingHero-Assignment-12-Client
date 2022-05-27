import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaUserCircle, FaLinkedin } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [displayName, setDisplayName] = useState('')
    const [bio, setBio] = useState('')
    const [country, setCountry] = useState('')
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
    }, [userData])

    const handleProfileUpdate = event => {
        event.preventDefault()
        const userData = {
            displayName: user.displayName,
            bio: event.target.bio.value,
            country: event.target.country.value,
            city: event.target.city.value,
            image: event.target.image.value,
            phoneNumber: event.target.phoneNumber.value,
            linkedInProfile: event.target.linkedInProfile.value
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
                toast.success('Profile Updated')
                // event.target.reset()
            })
    }
    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><FaUserCircle color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />My Profile</h3>
            <div className='grid p-4 mt-4 border-[2px] border-gray-200 rounded-[8px] relative lg:flex'>
                <img className='mr-8 w-[120px] h-[120px] object-cover rounded-[20%]' src={user.photoURL} alt="" />
                <div>
                    <div className='flex justify-between items-center w-full'>
                        <span className='text-[30px] font-[600]'>{user.displayName}</span>
                        {
                            userData.linkedInProfile && <a className='absolute top-[18px] right-[16px]' href={userData?.linkedInProfile}><FaLinkedin color="gray" className="text=blue-500 text-[22px]" /></a>
                        }
                    </div>
                    <p className='text-[20px] font-[500]'>{user.email}</p>
                    <p className='text-[16px]'>{userData?.bio}</p>
                </div>
            </div>
            <form onSubmit={handleProfileUpdate} className='product-form mt-4'>
                <div className="product-form-container grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="displayName">My Name</label>
                        <input onChange={e => setDisplayName(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="displayName" id="displayName" defaultValue={displayName || user.displayName} required />
                        <label htmlFor="bio">Bio</label>
                        <textarea onChange={e => setBio(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 h-[136px] border-[2px] border-[#e3e8eb]' type="text" name="bio" id="bio" cols="20" rows="10" defaultValue={bio || userData?.bio} ></textarea>
                    </div>
                    <div>
                        <label htmlFor="email">My Email</label>
                        <input className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="email" id="email" value={user.email} rquired />
                        <label htmlFor="country">Country</label>
                        <input onChange={e => setCountry(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="country" id="country" defaultValue={country || userData.country} />
                        <label htmlFor="city">City</label>
                        <input onChange={e => setCity(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="city" id="city" defaultValue={city || userData.city} />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input onChange={e => setPhoneNumber(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="number" name="phoneNumber" id="phoneNumber" defaultValue={phoneNumber || userData.phoneNumber} />
                        <label htmlFor="image">Upload Product Thumbnail</label>
                        <input onChange={e => setImage(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="image" id="image" defaultValue={image || userData.image} />
                    </div>
                </div>
                <label htmlFor="linkedInProfile">LinkedIn Profile</label>
                <input onChange={e => setLinkedInProfile(e.target.value)} className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" name="linkedInProfile" id="linkedInProfile" defaultValue={linkedInProfile || userData.linkedInProfile} />
                <div className="text-right">
                    <input className='py-[10px] px-4 bg-primary rounded-[8px] text-white font-[500] active:border-[0px]' type="submit" value="Save Profile" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;
import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Omega = () => {
    useTitle("Omega")
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [modalObject, setModalObject] = useState();
    console.log(user);
    const watches = useLoaderData();
    const date = new Date();

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const brand_name = form.brand_name.value;
        const product_name = form.product_name.value;
        const username = form.username.value;
        const resale_price = form.resale_price.value;
        const phone = form.phone.value;
        const meetingLoc = form.meetingLoc.value;
        const booking_date = form.booking_date.value;
        const buyerId = user?.uid;
        const watchId = modalObject._id;
        const watch_picture = modalObject.picture

        const booking = {

            watchId,
            buyerId,
            brand_name,
            product_name,
            username,
            resale_price,
            phone,
            meetingLoc,
            booking_date,
            watch_picture
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShowModal(false)
                setTimeout(() => window.location.reload(false), 2000)
                toast.success('Booked successfully', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='bg-black'>
                    <img className='w-8/12 ml-36 pl-28 pt-0' src='https://i.ibb.co/qs6HwMS/omega.jpg' alt='' />
                </div>
                <div className='bg-black'>
                    <h1 className='font1 text-5xl font-bold text-white px-36 pt-24 pb-10'>Omega Watches</h1>
                    <h1 className='font1 text-2xl font-bold text-white px-36 pb-10'>Buy Pre-owned Omega</h1>
                    <h1 className='text-justify font1 text-sm text-white px-36'>With a rich history dating back to 1848, Omega is one of the world's oldest and most widely respected luxury watch manufacturers. The iconic Swiss timepiece company produces everything from elegant dress watches to technologically advanced sports chronographs, and Omega watches have been worn by everyone from actors in films to astronauts on the moon.</h1>
                </div>
            </div>
            <div className='flex flex-wrap gap-10 py-10 w-full justify-around px-36'>
                {
                    watches.map(watch => {
                        return (<div className={`flex flex-wrap w-96 mb-5 py-2 ${watch.title == "Omega" ? '' : 'hidden'} ${watch.purchased == "true" ? 'hidden' : ''}`}>
                            {watch.title == "Omega" && (<>
                                <div class="flex flex-col max-w-sm ">
                                    <div className='flex justify-center'>
                                        <a href="/">
                                            <img class="rounded-t-lg w-48 py-5 h-80" src={watch.picture} alt="" />
                                        </a>
                                    </div>
                                    <div class="p-10">
                                        <a href="/">
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Brand: {watch.title}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Watch Name: {watch.name}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Location: {watch.location}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Resale Price: ${watch.resale_price}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Original Price: ${watch.original_price}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Years of use: {date.getFullYear() - watch.year_of_purchase}</h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Posted on: {watch.date.slice(0, 10)} </h5>
                                            <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">Seller: {watch.userName}</h5>
                                        </a>                                        
                                        {

                                            user?.photoURL == "seller" ? (<div><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{watch.details.slice(0, 100)}...</p>
                                                <Link to='/'><button disabled className='bg-red-200 w-full text-white ml-0 rounded p-3'>Book Now</button></Link></div>) : (<div><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{watch.details.slice(0, 100)}...</p>
                                                    <Link to='/homepage/private/omega'><button onClick={() => { setShowModal(true); setModalObject(watch) }} className='bg-gray-700 w-full text-white ml-0 rounded p-3'>Book Now</button></Link></div>)
                                        }

                                        {showModal && modalObject && (
                                            <>
                                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                    <div >
                                                        {/*content*/}
                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                            {/*header*/}
                                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                <h3 className="text-3xl font-semibold">
                                                                    Booking details:
                                                                </h3>
                                                                <button
                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() => setShowModal(false)}
                                                                >
                                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                        ×
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            {/*body*/}
                                                            <div>
                                                                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 m-24'>
                                                                    <div className='flex items-center'>
                                                                        <label className='font1 font-bold' for='brand_name'>Brand:</label>
                                                                        <input name='brand_name' type="text" defaultValue={modalObject.title} disabled className="font1 text-lg border-transparent w-full" />
                                                                    </div>
                                                                    <div className='flex items-center'>
                                                                        <label className='font1 font-bold' for='product_name'>Product Name:</label>
                                                                        <input name='product_name' type="text" defaultValue={modalObject.name} disabled className="text-lg font1 border-transparent w-full" />
                                                                    </div>
                                                                    <div className='flex items-center'>
                                                                        <label className='font1 font-bold' for='username'>Customer Name:</label>
                                                                        <input name='username' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="text-lg font1 border-transparent" />
                                                                    </div>
                                                                    <div className='flex items-center'>
                                                                        <label className='font1 font-bold' for='email'>Email:</label>
                                                                        <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Email Address" className="text-lg font1 border-transparent" />
                                                                    </div>
                                                                    <div className='flex items-center'>
                                                                        <label className='font1 font-bold' for='resale_price'>Price: $</label>
                                                                        <input name='resale_price' type="text" defaultValue={modalObject.resale_price} disabled placeholder="Email Address" className="text-lg font1 border-transparent" />
                                                                    </div>
                                                                    <input name='phone' type="number" placeholder="Phone Number" required className="input w-full rounded-md input-bordered" />
                                                                    <input name='meetingLoc' type="text" placeholder="Watch Pick up location" required className="input w-full rounded-md input-bordered" />
                                                                    <div className='flex items-center'>
                                                                        <label className='font1 font-bold' for='resale_price'>Booking date:</label>
                                                                        <input name='booking_date' type="text" defaultValue={date} disabled className="input font1 w-full border-transparent input-bordered" />
                                                                    </div>

                                                                    <br />
                                                                    <input className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" value="Submit" />
                                                                    <input onClick={() => setShowModal(false)} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" value="Cancel" />
                                                                </form>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                            </>
                                        )}
                                        <ToastContainer
                                            theme="dark"
                                            position="top-center"
                                            autoClose={3000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss={false}
                                            draggable
                                            pauseOnHover
                                        />
                                    </div>
                                </div>
                            </>)}
                        </div>)
                    })
                }
            </div>
        </div>
    );
};

export default Omega;
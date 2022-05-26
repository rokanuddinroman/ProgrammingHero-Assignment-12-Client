import React from 'react';

const confirmModal = ({ setShowModal, showModal, product, handleDelete }) => {
    // const =props.product
    setShowModal(product)
    const id = product._id
    return (
        <>
            {showModal && <div>
                <input type="checkbox" id="confirmModal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg border-b-[2px]">Congratulations random Interner user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div class="modal-action">
                            <label onClick={() => setShowModal(null)} for="confirmModal" class="btn">Cancel</label>
                            <label onClick={() => handleDelete(id)} for="confirmModal" class="btn bg-red-500">Delete</label>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default confirmModal;
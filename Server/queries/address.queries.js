import User from "../database/models/user.model.js";

export const createAddress = async (userId, address) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $push: { addresses: address } },
    { new: true, upsert: true }
  );
  if (!user) {
    throw new Error("User not found");
  }
  return address;
};

export const updateAddressById = async (userId, address) => {
  const addressId = address._id;
  const result = await User.updateOne(
    { _id: userId, "addresses._id": addressId },
    { $set: { "addresses.$": address } }
  );

  if (result.nModified === 0) {
    throw new Error("Address not found");
  }

  return address;
};

export const deleteAddressById = async (userId, addressId) => {
  const result = await User.updateOne(
    { _id: userId },
    { $pull: { addresses: { _id: addressId } } }
  );

  if (result.nModified === 0) {
    throw new Error("Address not found");
  }

  return addressId;
};

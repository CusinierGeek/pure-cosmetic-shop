import {
  createAddress,
  updateAddressById,
  deleteAddressById,
} from "../queries/address.queries.js";

export const addAddress = async (req, res) => {
  try {
    const userId = req.body.userId;
    const data = req.body.address;

    const newAddress = await createAddress(userId, data);

    res.json(newAddress);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateAddress = async (req, res) => {
  try {
    const userId = req.body.userId;
    const address = req.body.address;
    const newAddress = await updateAddressById(userId, address);
    res.json(newAddress);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const userId = req.body.userId;
    const addressId = req.body.addressId;
    const deletedAddress = await deleteAddressById(userId, addressId);

    res.json(deletedAddress);
  } catch (error) {
    res.json({ error: error.message });
  }
};

import Listing from '../models/Listing.js';

export const createListing = async (req, res) => {
  const { title, description, price, category } = req.body;
  try {
    const listing = await Listing.create({
      title,
      description,
      price,
      category,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      user: req.user.id,
    });
    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getListings = async (req, res) => {
  const { search, category, minPrice, maxPrice } = req.query;
  const filter = {};

  if (search) filter.title = { $regex: search, $options: 'i' };
  if (category) filter.category = category;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  try {
    const listings = await Listing.find(filter).populate('user', 'username').sort({ createdAt: -1 });
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('user', 'username');
    if (!listing) return res.status(404).json({ message: 'Annons hittades inte' });
    res.status(200).json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Annons hittades inte' });
    if (listing.user.toString() !== req.user.id) return res.status(403).json({ message: 'Inte behörig' });

    const { title, description, price, category } = req.body;
    if (title) listing.title = title;
    if (description) listing.description = description;
    if (price) listing.price = price;
    if (category) listing.category = category;
    if (req.file) listing.image = `/uploads/${req.file.filename}`;

    await listing.save();
    res.status(200).json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Annons hittades inte' });
    if (listing.user.toString() !== req.user.id) return res.status(403).json({ message: 'Inte behörig' });

    await listing.deleteOne();
    res.status(200).json({ message: 'Annons borttagen' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
import express from 'express';
import multer from 'multer';
import path from 'path';
import { createListing, getListings, getListing, updateListing, deleteListing } from '../controllers/listingController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'src/uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.get('/', getListings);
router.get('/:id', getListing);
router.post('/', auth, upload.single('image'), createListing);
router.put('/:id', auth, upload.single('image'), updateListing);
router.delete('/:id', auth, deleteListing);

export default router;
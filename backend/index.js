const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mongoDB = require("./config/DB");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//models

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const Admin = mongoose.model("tbl_Admin", AdminSchema);

//routes

//admin insertion
app.post("/Admin", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const AdminData = new Admin({
      name,
      email,
      password,
    });

    await AdminData.save();

    res.json({ message: "Admin inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//admin view
app.get("/Admin", async (req, res) => {
  try {
    let adminList = await Admin.find();

    res.json({ adminList });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/Admin/:Id", async (req, res) => {
  const id = req.params.Id;
  try {
    let admin_individual = await Admin.findById(id);

    res.json({ admin_individual });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//admin deletion
app.delete("/Admin/:Id", async (req, res) => {
  try {
    const Id = req.params.Id;
    const deletedAdmin = await Admin.findByIdAndDelete(Id);

    res.json({ message: "Admin details Deleted", deletedAdmin });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//hotel

//hotel schema

const HotelSchema = new mongoose.Schema({
  hotel_name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  proof: {
    type: String,
  },
  photos: {
    type: String,
  },
  H_status: {
    type: String,
  },
  Lattitude: {
    type: String,
  },
  Longitude: {
    type: String,
  },
});
const Hotel = mongoose.model("tbl_hotel", HotelSchema);

//insertion
app.post("/hotel", async (req, res) => {
  const {
    hotel_name,
    email,
    password,
    proof,
    photos,
    H_status,
    Lattitude,
    Longitude,
  } = req.body;
  try {
    const HotelData = new Hotel({
      hotel_name,
      email,
      password,
      proof,
      photos,
      H_status,
      Lattitude,
      Longitude,
    });

    await HotelData.save();

    res.json({ message: "Hotel Details inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//view
app.get("/hotel", async (req, res) => {
  try {
    let hotelList = await Hotel.find();

    res.json({ hotelList });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/hotel/:Id", async (req, res) => {
  const Id = req.params.Id;
  try {
    let hotel_individual = await Hotel.findById(Id);

    res.json({ hotel_individual });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//deletion
app.delete("/hotel/:Id", async (req, res) => {
  try {
    const Id = req.params.Id;
    const deletedHotel = await Hotel.findByIdAndDelete(Id);

    res.json({ message: "Hotel Deleted successfully", deletedHotel });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


//#Category

//Categoryschema

const Categoryschema = new mongoose.Schema({
  Category_name: {
    type: String,
  },
  Description: {
    type: String,
  },
});
const Category = mongoose.model("tbl_Category", Categoryschema);

//insertion
app.post("/category", async (req, res) => {
  const { Category_name, Description } = req.body;
  try {
    const CategoryData = new Category({
      Category_name,
      Description,
    });

    await CategoryData.save();

    res.json({ message: "Category Details inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//view
app.get("/category", async (req, res) => {
  try {
    let categoryList = await Category.find();

    res.json({ categoryList });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/category/:Id", async (req, res) => {
  const Id = req.params.Id;
  try {
    let category_individual = await Category.findById(Id);

    res.json({ category_individual });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//deletion
app.delete("/category/:Id", async (req, res) => {
  try {
    const Id = req.params.Id;
    const deletedCategory = await Category.findByIdAndDelete(Id);

    res.json({ message: "Product Deleted successfully", deletedCategory });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//subcategory

//Sub_Category schema

const SubCatSchema = new mongoose.Schema({
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: true,
  },
  SubCategory_name: {
    type: String,
  },
});
const SubCategory = mongoose.model("tbl_subCategory", SubCatSchema);

//insertion
app.post("/subcategory", async (req, res) => {
  const { categoryID, SubCategory_name } = req.body;
  try {
    const SubCatData = new SubCategory({
      categoryID,
      SubCategory_name,
    });

    await SubCatData.save();

    res.json({ message: "subcategory created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//view
app.get("/subcategory", async (req, res) => {
  try {
    let SubCatList = await SubCategory.find().populate("categoryID");

    res.json({ SubCatList });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
//individual view
app.get("/subcategory/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    let SubCat_individual = await SubCategory.findById(Id).populate("categoryID");

    res.json({ SubCat_individual });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//deletion
app.delete("/subcategory/:Id", async (req, res) => {
  try {
    const Id = req.params.Id;
    const deletedSubCat = await SubCategory.findByIdAndDelete(Id);

    res.json({ message: "subcategory deleted successfully", deletedSubCat });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


//#PRODUCT

//PRODUCT schema

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
  },
  photo: {
    type: String,
  },
  price: {
    type: String,
  },
  Description: {
    type: String,
  },
  productstatus: {
    type: String,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: true,
  },
  SubCatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SubCategory,
    required: true,
  },
  HotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Hotel,
    required: true,
  },
});
const Product = mongoose.model("tbl_product", productSchema);

//insertion
app.post("/product", async (req, res) => {
  const {
    product_name,
    photo,
    price,
    Description,
    productstatus,
    categoryID,
    SubCatId,
    HotelId,
  } = req.body;
  try {
    const ProductData = new Product({
      product_name,
      photo,
      price,
      Description,
      productstatus,
      categoryID,
      SubCatId,
      HotelId,
    });

    await ProductData.save();

    res.json({ message: "product Details inserted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//view
app.get("/product", async (req, res) => {
  try {
    let productList = await Product.find()
      .populate("categoryID")
      .populate("SubCatId")
      .populate("HotelId");

    res.json({ productList });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.get("/product/:Id", async (req, res) => {
  const Id = req.params.Id;
  try {
    let product_individual = await Product.findById(Id)
      .populate("categoryID")
      .populate("SubCatId")
      .populate("HotelId");

    res.json({ product_individual });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//deletion
app.delete("/product/:Id", async (req, res) => {
  try {
    const Id = req.params.Id;
    const dletedProduct = await Product.findByIdAndDelete(Id);

    res.json({ message: "Product Deleted successfully", dletedProduct });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//Gallery

//Gallery schema

const GallerySchema = new mongoose.Schema({
  prodcutId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    required: true,
  },
  gallery_file: {
    type: String,
  },
});
const Gallery = mongoose.model("tbl_Gallery", GallerySchema);

//insertion
app.post("/gallery", async (req, res) => {
  const { prodcutId, gallery_file } = req.body;
  try {
    const GalleryData = new Gallery({
      prodcutId,
      gallery_file,
    });

    await GalleryData.save();

    res.json({ message: "Gallery data inseted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//view
app.get("/gallery", async (req, res) => {
  try {
    let galleryList = await Gallery.find().populate("prodcutId");

    res.json({ galleryList });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//individual view

app.get("/gallery/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    let gallery_individual = await Gallery.findById(Id).populate(
      "prodcutId"
    );

    res.json({ gallery_individual });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//deletion
app.delete("/gallery/:Id", async (req, res) => {
  try {
    const Id = req.params.Id;
    const deletedgallery = await Gallery.findByIdAndDelete(Id);

    res.json({ message: "gallery image deleted successfully", deletedgallery });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
// #Customer

//Schema
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  mongoDB().then(() => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

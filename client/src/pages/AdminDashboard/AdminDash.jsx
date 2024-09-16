import React, { useEffect, useState } from "react";
import "./admindash.css";
import axios from "axios";
import { toast } from "sonner";

const AdminDash = () => {
  window.scrollTo(0, 0);
  const [postMenuDetails, setPostMenuDetails] = useState({
    category: "",
    menu: "",
    description: "",
    oldprice: "",
    newprice: "",
    rating: "",
  });

  const [postBlogDetails, setPostBlogDetails] = useState({
    title: "",
    body: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [blogImageFile, setBlogImageFile] = useState(null);

  const handleMenuDetails = (e) => {
    setPostMenuDetails({ ...postMenuDetails, [e.target.name]: e.target.value });
  };

  const handleBlogDetails = (e) => {
    setPostBlogDetails({ ...postBlogDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  // Blog Form Data
  const handleBlogImageChange = (e) => {
    const file = e.target.files[0];
    setBlogImageFile(file);
  };

  console.log(blogImageFile);

  const baseUrl = "http://localhost:3500/api/v1";

  const handlePostMenu = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("json", JSON.stringify(postMenuDetails));
    //setPostMenuDetails((prev)=>({...prev, imagePath:formData}))
    console.log(postMenuDetails);

    try {
      const response = await axios.post(`${baseUrl}/postmenu`, formData);
      console.log(response);
      toast.success(response.data.message);
      handleMenuDetails((e.value = ""));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handlePostBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", blogImageFile);
    formData.append("json", JSON.stringify(postBlogDetails));

    console.log(postBlogDetails);

    try {
      const response = await axios.post(`${baseUrl}/postblog`, formData);
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="adminDash">
        <div className="adminDashMid">
          <p className="adminDashMid1">
            Dashboard / <span>Admin</span>
          </p>
          <p className="adminDashMid2">Welcome to Dashboard</p>
          <div className="adminDashMid3">
            <div className="adminDashMid3Head">
              <div className="adminDashMid3HeadL">
                <p className="adminDashMid3HeadL1">Your Most Recent Earnings</p>
                <p className="adminDashMid3HeadL2">
                  Your sales earnings over the last 7 days
                </p>
              </div>
              <div className="adminDashMid3HeadR">
                <p className="adminDashMid3HeadR1">Range</p>
                <p className="adminDashMid3HeadR2">period</p>
              </div>
            </div>
            <div className="adminDashMid3EarningTop">
              <div className="adminDashMid3EarningTop1">
                <div className="adminDashMid3EarningTop1Img">
                  <i class="fa-solid fa-piggy-bank"></i>
                </div>
                <div className="adminDashMid3EarningTop1Txt">
                  <p className="adminDashMid3EarningTop1Txt1">GROSS EARNING</p>
                  <p className="adminDashMid3EarningTop1Txt2">#7,321,203.81</p>
                </div>
              </div>
              <div className="adminDashMid3EarningTop1">
                <div className="adminDashMid3EarningTop1Img">
                  <i class="fa-solid fa-coins"></i>
                </div>
                <div className="adminDashMid3EarningTop1Txt">
                  <p className="adminDashMid3EarningTop1Txt1">TAX WITHHELD</p>
                  <p className="adminDashMid3EarningTop1Txt2">#265,203.01</p>
                </div>
              </div>
              <div className="adminDashMid3EarningTop1">
                <div className="adminDashMid3EarningTop1Img">
                  <i class="fa-solid fa-wallet"></i>
                </div>
                <div className="adminDashMid3EarningTop1Txt">
                  <p className="adminDashMid3EarningTop1Txt1">NEW EARNING</p>
                  <p className="adminDashMid3EarningTop1Txt2">#44,411,531.26</p>
                </div>
              </div>
            </div>
            <div className="adminDashMid3EarningTopInsert">
              <div className="adminDashMid3EarningTopInsert1">DATE</div>
              <div className="adminDashMid3EarningTopInsert2">SALES COUNT</div>
              <div className="adminDashMid3EarningTopInsert3">
                GROSS EARNING
              </div>
              <div className="adminDashMid3EarningTopInsert4">TAX WITHHELD</div>
              <div className="adminDashMid3EarningTopInsert5">NET EARNING</div>
            </div>
            <div className="adminDashMid3EarningTopValue">
              <div className="adminDashMid3EarningTopValue1">
                <div>26/07/2024</div>
                <div>410</div>
                <div>+ #120,400</div>
                <div>- #47,970</div>
                <div>#584,520</div>
              </div>
              <div className="adminDashMid3EarningTopValue1">
                <div>25/07/2024</div>
                <div>377</div>
                <div>+ #98,995</div>
                <div>- #33,310</div>
                <div>#383,210</div>
              </div>
              <div className="adminDashMid3EarningTopValue1">
                <div>24/07/2024</div>
                <div>392</div>
                <div>+ #105,189</div>
                <div>- #41,978</div>
                <div>#496,762</div>
              </div>
              <div className="adminDashMid3EarningTopValue1">
                <div>23/07/2024</div>
                <div>312</div>
                <div>+ #99,896</div>
                <div>- #35,619</div>
                <div>#458,785</div>
              </div>
              <div className="adminDashMid3EarningTopValue1">
                <div>22/07/2024</div>
                <div>300</div>
                <div>+ #95,389</div>
                <div>- #30,400</div>
                <div>#336,926</div>
              </div>
              <div className="adminDashMid3EarningTopValue1">
                <div>21/07/2024</div>
                <div>358</div>
                <div>+ #112,671</div>
                <div>- #56,891</div>
                <div>#417,168</div>
              </div>
            </div>
          </div>
          <div className="adminDashMid4">
            <div className="adminDashMid4Head">
              <div className="adminDashMid4HeadL">
                <p className="adminDashMid4HeadL1">Your Recent Orders</p>
                <p className="adminDashMid4HeadL2">
                  All recent orders over the last 7 days
                </p>
              </div>
              <div className="adminDashMid4HeadR">
                <select>
                  <option>Recent</option>
                  <option>completed</option>
                  <option>Pending</option>
                  <option>cancelled</option>
                </select>
                <button>Filter</button>
              </div>
            </div>
            <div className="adminDashMid4Column">
              <p className="adminDashMid4Column1">Date</p>
              <p className="adminDashMid4Column2">Order ID</p>
              <p className="adminDashMid4Column3">Category</p>
              <p className="adminDashMid4Column4">Order Item</p>
              <p className="adminDashMid4Column7">Quantity</p>
              <p className="adminDashMid4Column5">Price</p>
              <p className="adminDashMid4Column6">Payment</p>
              <p className="adminDashMid4Column7">Status</p>
            </div>
            <div className="adminDashMid4Value">
              <div className="adminDashMid4Value1">
                <p>Date</p>
                <p>Order ID</p>
                <p>Category</p>
                <p>Order Item</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Payment</p>
                <p>Status</p>
                <div className="adminDashMid4Column8">
                  <i class="fa-solid fa-pen-to-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="adminDashRight">
          <div className="adminDashRight1">
            <div className="adminDashRight1Head">
              <p>Update menu</p>
            </div>
            <div className="adminDashRight1Txt">
              <p>Post</p>
              <p>Edit</p>
              <p>Remove</p>
            </div>
          </div>
          <div className="adminDashRight1Form">
            <form onSubmit={handlePostMenu}>
              <div className="adminDashRight1FormTop1">
                <p>Category</p>
                <input
                  type="text"
                  placeholder="Pizza"
                  name="category"
                  onChange={handleMenuDetails}
                />
              </div>
              <div className="adminDashRight1FormTop2">
                <p>Menu</p>
                <input
                  type="text"
                  placeholder="Sicilian Pizza"
                  name="menu"
                  onChange={handleMenuDetails}
                />
              </div>
              <div className="adminDashRight1FormTop3">
                <p>Description</p>
                <textarea
                  name="description"
                  placeholder="Add menu description"
                  onChange={handleMenuDetails}
                />
              </div>
              <div className="adminDashRight1FormTop5">
                <p>Select Image</p>
                <input
                  type="file"
                  placeholder="Sicilian Pizza"
                  name="imagePath"
                  onChange={handleImageChange}
                />
              </div>
              <div className="adminDashRight1FormTop4">
                <div className="adminDashRight1FormTop4L">
                  <p>Old Price</p>
                  <input
                    type="text"
                    name="oldprice"
                    onChange={handleMenuDetails}
                  />
                </div>
                <div className="adminDashRight1FormTop4L">
                  <p>New Price</p>
                  <input
                    type="text"
                    name="newprice"
                    onChange={handleMenuDetails}
                  />
                </div>
              </div>
              <div className="adminDashRight1FormTop4">
                <div className="adminDashRight1FormTop4L">
                  <p>Rating</p>
                  <input
                    type="number"
                    name="rating"
                    onChange={handleMenuDetails}
                  />
                </div>
                <div className="adminDashRight1FormTop6">
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>

          <div className="adminDashRight2">
            <div className="adminDashRight1Head">
              <p>Update Blogs</p>
            </div>
            <div className="adminDashRight1Txt">
              <p>Post</p>
              <p>Edit</p>
              <p>Remove</p>
            </div>
            <div className="adminDashRight2Form">
              <form onSubmit={handlePostBlog}>
                <div className="adminDashRight2Form1">
                  <p>Title</p>
                  <input
                    name="title"
                    type="text"
                    onChange={handleBlogDetails}
                  />
                </div>
                <div className="adminDashRight2Form2">
                  <p>Body</p>
                  <textarea name="body" onChange={handleBlogDetails} />
                </div>
                <div className="adminDashRight2Form3">
                  <p>Select Image</p>
                  <input
                    name="imagePath"
                    type="file"
                    onChange={handleBlogImageChange}
                  />
                </div>
                <div className="adminDashRight1FormTop6">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDash;

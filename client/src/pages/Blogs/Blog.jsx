import React, { useState, useEffect } from "react";
import "./blog.css";
import axios from "axios";
import poster from "../../assets/widgets_blog2.png";

const Blog = () => {
  window.scrollTo(0, 0);
  const [blogPost, setBlogPost] = useState();

  const baseUrl = "http://localhost:3500/api/v1";

  const getBlogPost = async () => {
    try {
      const response = await axios.get(`${baseUrl}/allblogs`);
      console.log(response);
      setBlogPost(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogPost();
  }, []);

  console.log(blogPost);

  return (
    <div className="blog">
      <div className="blogHead">
        <p className="blogHead1">Our Blog</p>
        <div className="blogHeadSub">
          <p className="blogHeadSub1">Home</p>
          <i class="fa-solid fa-angle-right"></i>
          <p className="blogHeadSub2">Blog</p>
        </div>
      </div>
      <div className="blogMain">
        <div className="blogMainL">
          {blogPost?.map((blog, index) => (
            <div className="blogMainL1">
              <div className="blogMainL1Img">
                <img src={blog.blogImagePath} alt="" />
              </div>
              <div className="blogMainL1Cont">
                <p className="blogMainL1Cont1">
                  September 7, 2024 / Post by <span>admin</span>
                </p>
                <p className="blogMainL1Cont2">{blog.blogTitle}</p>
                <p className="blogMainL1Cont3">{blog.blogBody}</p>
                <div className="blogMainL1Cont4">
                  <button>READ MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="blogMainR">
          <div className="blogMainRHead">
            <p>Recent Posts</p>
          </div>
          <div className="blogMainRCont">
            {blogPost?.slice(3, 6).map((blog, index) => (
              <div className="blogMainRCont1">
                <img src={blog.blogImagePath} alt="" />
                <div className="blogMainRCont1Cont">
                  <p className="blogMainRCont1Cont1">{blog.blogTitle}</p>
                  <p className="blogMainRCont1Cont2"> August 31, 2020</p>
                </div>
              </div>
            ))}
          </div>
          <div className="blogMainRButtom">
            <div className="blogMainButtomHead">
              <p>Popular tags</p>
            </div>
            <div className="blogMainRButtomCont">
              <p>beer</p>
              <p>burgers</p>
              <p>delicious</p>
              <p>fast food</p>
              <p>food mood</p>
              <p>good meal</p>
              <p>meat</p>
              <p>pizza</p>
              <p>menu</p>
              <p>cocktail</p>
              <p>chicken & chips</p>
              <p>green pea</p>
              <p>dougnuts</p>
              <p>cheese</p>
              <p>toast</p>
            </div>
          </div>
          <div className="searchResultRightPoster">
            <p className="searchResultRightPoster1">Super Delicious</p>
            <p className="searchResultRightPoster2">Chicken</p>
            <p className="searchResultRightPoster3">call us now</p>
            <p className="searchResultRightPoster4 ">0800-343-2110</p>
            <div className="searchResultRightPoster5">
              <img src={poster} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

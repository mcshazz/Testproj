import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Blog from './Blog.js'
import Blog2 from './Blog2.js'
import Blog3 from './Blog3.js'

export default function Blogs (){
	return ( 

			<div className="blogscontainer">

			<Blog />
			<br/>
			<Blog2 />
<br/>
			<Blog3 />



			</div>


		)


}

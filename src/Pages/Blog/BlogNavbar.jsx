import React from 'react'

const BlogNavbar = () => {
  return (
    <div>
          <ul class="container nav nav-pills nav-fill gap-2 p-2 small  rounded-5 shadow-sm" id="pillNav2" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
  </li>
 </ul>
    </div>
  )
}

export default BlogNavbar
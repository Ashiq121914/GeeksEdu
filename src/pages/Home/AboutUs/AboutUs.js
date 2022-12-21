import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div class="bg-light ">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4">About us</h1>
              <p class="lead text-muted mb-0">
                We are GeeksEdu.Teaching is one of the most challenging and
                complex jobs on the planet. Our digital resources, tools, and
                learning materials are developed by educational experts to
                incorporate leading pedagogical practices. They are useful in
                any type of teaching moment and many can be used to support
                national education standards.
              </p>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

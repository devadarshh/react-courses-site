import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  // Get courses based on the selected category
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseArray) => {
        allCourses = allCourses.concat(courseArray);
      });
      return allCourses;
    } else {
      return courses[category] || []; // Handle the case when the category is not found
    }
  }

  // Get the filtered courses
  const filteredCourses = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <Card
            course={course}
            key={course.id} // Use a unique key from the course object
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      ) : (
        <p>No courses found for this category.</p>
      )}
    </div>
  );
};

export default Cards;

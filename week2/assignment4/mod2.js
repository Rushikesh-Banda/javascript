//data
const courseList = [
  { id: 101, name: "JavaScript", cost: 999, isLive: true },
  { id: 102, name: "React", cost: 1499, isLive: false },
  { id: 103, name: "Node", cost: 1299, isLive: true }
];

const fetchLiveCourses = (list) =>// Get all live courses
  list.filter(item => item.isLive === true);

const orderByCostHighToLow = (list) =>// Sort courses by cost (high to low)
  list.slice().sort((c1, c2) => c2.cost - c1.cost);

const buildCourseOverview = (list) =>// Build course overview with name and price
  list.map(course => ({
    courseName: course.name,
    coursePrice: course.cost
  }));

const calculateLiveCourseValue = (list) =>// Calculate total value of live courses
  list.reduce((total, course) => {
    return course.isLive ? total + course.cost : total;
  }, 0);

const registerNewCourse = (list, courseData) => {
  return [...list, courseData];
};

console.log("Live Courses:", fetchLiveCourses(courseList));

console.log(
  "Courses Sorted by Price:",
  orderByCostHighToLow(courseList)
);

console.log(
  "Course Overview:",
  buildCourseOverview(courseList)
);

console.log(
  "Total Live Course Value:",
  calculateLiveCourseValue(courseList)
);

console.log(
  "After Adding Course:",
  registerNewCourse(courseList, {
    id: 104,
    name: "MongoDB",
    cost: 899,
    isLive: true
  })
);

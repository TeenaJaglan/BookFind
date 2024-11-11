const items = [
{id:1,key:"author_name",value:"Author Name"},
{id:2,key:"publisher",value:"Publisher"},
{id:3,key:"first_publish_year",value:"Publish Year"},
{id:4,key:"language",value:"Language"},
{id:5,key:"title",value:"Book Title"},
{id:6,key:"subject",value:"Topic / Category / Subject /Type"},
{id:8,key:"number_of_pages_median",value:"Number of Pages"}];
export default items;
export const apiurl = "https://openlibrary.org/search.json?title=";
export const imageurl = "https://api.dicebear.com/5.x/initials/svg?seed=";
// https://openlibrary.org/search.json?title={bookTitle};
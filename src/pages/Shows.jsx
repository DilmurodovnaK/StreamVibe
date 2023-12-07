import { fetchDataFromApi } from "./utils/ api";
function Shows() {
useEffect(() =>{
apiTesting();
}, []);
const apiTesting = () =>{
fetchDataFromApi("/movie/popular").then((res) =>{
console. log (res);
});
};
return <div className="Shows">Shows</div>;
}
export default Shows;
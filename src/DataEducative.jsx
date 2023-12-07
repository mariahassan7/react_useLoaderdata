import {useLoaderData} from 'react-router-dom';
export const DataEducative = () => {
    // const [educative_data, set_educative_data] = useState() 
    // useEffect(()=>{
    //     fetch();
    // })
    // takes alot of effort and code
    // useLOadData --> loads data by the time URL is accessed 
    //before this component is rendered, data will be loaded 
    const educatives_dog_object_url = useLoaderData();
    //want user to be able to see the loaded data and not a blank screen 
    return(
        <>
        <h1>API call made from Educative Answers</h1>
        <div>
           <br></br>
            <img src={educatives_dog_object_url} alt="educatives_pets" width="900" height="700" controls >
            </img>
        </div>
        </>
    ) 
}
export const load_my_api_data = async () => {
    const educatives_response = await fetch("https://random.dog/woof.json");
    const educatives_dog_object = await educatives_response.json();
    return educatives_dog_object.url;
}

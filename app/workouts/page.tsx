import Banner from "../components/Banner";


const getWorkOutCard = async() => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
}


const WorkOutPage = async () => {

    const workOutData = await getWorkOutCard();

    console.log(workOutData);
    

    return (
        
            <Banner/>
        
    );
};

export default WorkOutPage;
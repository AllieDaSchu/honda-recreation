import '../style/global.css'
import VehiclesWrapper from "../components/VehiclesWrapper.jsx"
import crv from "../assets/crv.png"


function Vehicles() {
    return (
        <div className="vehicle-body">
            <VehiclesWrapper header="test" cards={[
                {
                    subtitle: "test",
                    img: crv,
                    title: "Title",
                    price: "$price",
                    number: "233",
                    info: "Information",
                    explore: "Link",
                    build: "link2"
                },
                {
                    subtitle: "test",
                    img: crv,
                    title: "Title",
                    price: "$price",
                    number: "233",
                    info: "Information",
                    explore: "Link",
                    build: "link2"
                },
                {
                    subtitle: "test",
                    img: crv,
                    title: "Title",
                    price: "$price",
                    number: "233",
                    info: "Information",
                    explore: "Link",
                    build: "link2"
                },
                {
                    subtitle: "test",
                    img: crv,
                    title: "Title",
                    price: "$price",
                    number: "233",
                    info: "Information",
                    explore: "Link",
                    build: "link2"
                },
                {
                    subtitle: "test",
                    img: crv,
                    title: "Title",
                    price: "$price",
                    number: "233",
                    info: "Information",
                    explore: "Link",
                    build: "link2"
                },
                {
                    subtitle: "test",
                    img: crv,
                    title: "Title",
                    price: "$price",
                    number: "233",
                    info: "Information",
                    explore: "Link",
                    build: "link2"
                }
            ]} />
        </div>
        
    )
}

export default Vehicles
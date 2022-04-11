import Slider from "./Slider";

const SliderData = [
  {
    id: "1",
    sale: "Sale 20% off",
    brand: "On Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/arrival-bg.png",
  },
  {
    id: "2",
    sale: "Sale 40% off",
    brand: "Off Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/slider-bg.jpg",
  },
  {
    id: "3",
    sale: "Sale 60% off",
    brand: "On/Off Everything",
    text: "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
    image: "images/arrival-bg.png",
  },
];

const ContentSlider = () => {
  //  console.log(SliderData,"data")
  return (
    <>
      {/* {SliderData.map((slider) => (
        <Slider slider={slider} />
      ))} */}
      <Slider slider= {SliderData}></Slider>
    </>
  );
};

export default ContentSlider;

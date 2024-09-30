import { useSearchParams } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryList";
import Container from "../Container/Container";


const Categories = () => {
  const [params, setparams] = useSearchParams();
  const category = params.get("category");
  console.log(categories)

  return (
    <Container>
      <div className="p-5 flex item-center justify-between overflow-x-auto">
        {categories?.map((item) => (
          <CategoryBox
            key={item?.label}
            label={item?.label}
            Icon={item?.icon}
            description={item?.description}
            active={category == item?.label}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
import { Button, Navbar } from "@mantine/core";
import Navlink from "src/components/appshell/Navlink";
import { AiOutlineOrderedList, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router";
export default function NavbarContent() {
  const navigate=useNavigate();
  return (
    <Navbar width={{ base: 200, sm: 200 }} height={800} className="m-0 p-0">
      <Navlink>
        <Button size="md" onClick={()=>{
          navigate('/feed');
        }}>
          <AiOutlineOrderedList />
          View Feed
        </Button>
      </Navlink>
      <Navlink>
        <Button size="md">
          <AiOutlinePlus />
          Create Post
        </Button>
      </Navlink>
    </Navbar>
  );
}

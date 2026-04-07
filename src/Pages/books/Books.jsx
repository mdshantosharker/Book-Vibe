import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../Components/homepage/ListedBooks/ListedReadList";
import ListedWishList from "../../Components/homepage/ListedBooks/ListedWishList";
const Books = () => {
  const { selectedBook, wishList } = useContext(BookContext);
  console.log("selectedBook", { selectedBook });
  console.log("wishList", { wishList });
  return (
    <div className="container mx-auto my-3">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishLIst Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>
        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;

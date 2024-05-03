import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Scard from "./UI/Scard";
import Bcard from "./UI/Bcard";
import Search from "./subpages/Search";
import { FaSearch } from "react-icons/fa";

const Menu = () => {
  const menu = useSelector((state) => state.menu.menu);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (!menu.isLoading) {
      setLoading(false);
      setFilteredSearch(menu.data);
    }
  }, [menu]);

  useEffect(() => {
    const filteredData = filterDataByKeyword(menu.data, searchTerm);
    setFilteredSearch(filteredData);
  }, [menu.data, searchTerm]);

  const filterDataByKeyword = (data, keyword) => {
    if (!keyword.trim()) {
      return data;
    }

    const searchTerm = keyword.toLowerCase();
    return data.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm)
    );
  };

  const onSearchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSearchMemoized = useMemo(() => {
    return filterDataByKeyword(menu.data, searchTerm);
  }, [menu.data, searchTerm]);

  return (
    <motion.div
      className="flex flex-col w-full fixed top-0 right-0 left-0 bottom-0 h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={`top-0 left-0 right-0 ${
          search ? "h-[110px]" : "h-[60px]"
        } w-full`}
      >
        <div className="h-full bg-white shadow-sm flex flex-col">
          <div className={`${search ? "h-3/6" : "h-full"} w-full flex`}>
            <div className="w-3/6 h-full flex justify-start pl-8 text-2xl font-bold items-center">
              Our Menu
            </div>
            <motion.div className="w-3/6 h-full flex justify-end items-center mr-8 text-xl">
              <FaSearch
                className=""
                onClick={() => {
                  setSearch(!search);
                }}
              />
            </motion.div>
          </div>

          {search && (
            <motion.div
              className="h-3/6 w-full flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Search onSearchChangeHandler={onSearchChangeHandler} />
            </motion.div>
          )}
        </div>
      </div>
      <div className="h-5/6 flex w-full">
        <motion.div
          className="w-3/12 h-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white h-full overflow-auto">
            <Scard />
          </div>
        </motion.div>
        <motion.div
          className="w-10/12 h-full bg-green-100 rounded-l-xl overflow-hidden"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-12 text-2xl font-bold flex justify-start items-center pl-4">
            BREAKFAST
          </div>
          <div className="h-full mx-2 mt-2 overflow-auto md:grid md:grid-cols-2">
            {!loading & (filteredSearchMemoized !== undefined) ? (
              filteredSearchMemoized.map((item, index) => (
                <Bcard key={index} item={item} />
              ))
            ) : (
              <div>No Data here</div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Menu;

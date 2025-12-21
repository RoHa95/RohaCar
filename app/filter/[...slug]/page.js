import React from "react";
import carsData from "@/data/carsData";
import Card from "@/components/module/Card";

const filter_keys = ["name", "mileage", "year", "price"];
const numericFilters = ["price", "year", "mileage"];

async function page({ params }) {
  const { slug } = await params;
  // console.log(slug);

  //   const matchFilter = (filters, value) => {
  //   if (filters.includes('all')) return true;
  //   if (value == null) return false;

  //   return filters.some(f =>
  //     String(f).toLowerCase() === String(value).toLowerCase()
  //   );
  // };

  const matchFilter = (filters, value, key) => {
    if (filters.includes("all")) return true;
    if (value == null) return false;

    // اگر فیلتر عددی بود
    // if (numericFilters.includes(key)) {
    //   const filterNumber = Number(filters[0]);
    //   const itemNumber = Number(value);

    //   if (isNaN(filterNumber) || isNaN(itemNumber)) return false;

    //   return itemNumber <= filterNumber;
    // }
    if (numericFilters.includes(key)) {
      const filterNumber = Number(filters[0]);
      const itemNumber = Number(value);

      if (isNaN(filterNumber) || isNaN(itemNumber)) return false;

      // year: بیشتر یا مساوی
      if (key === "year") {
        return itemNumber >= filterNumber;
      }

      // price و mileage: کمتر یا مساوی
      return itemNumber <= filterNumber;
    }

    // فیلتر متنی (name و ...)
    return filters.some((f) =>
      String(value).toLowerCase().includes(String(f).toLowerCase())
    );
  };

  // const filterData = (data, filters) =>
  // data.filter(item => {
  //   return Object.entries(filters).every(([key, values]) => {
  //     const itemValue = item[key];
  //     const result = matchFilter(values, itemValue);

  //     console.log({
  //       key,
  //       values,
  //       itemValue,
  //       result
  //     });

  //     return result;
  //   });
  // });

  const filterData = (data, filters) =>
    data.filter((item) => {
      return Object.entries(filters).every(([key, values]) => {
        const itemValue = item[key];
        return matchFilter(values, itemValue, key);
      });
    });

  const buildFiltersFormSlug = (slug) =>
    filter_keys.reduce((acc, key, index) => {
      acc[key] = [slug[index] ?? "all"];
      return acc;
    }, {});
  const filters = buildFiltersFormSlug(slug);
  // console.log(filters);

  const result = filterData(carsData, filters);
  // console.log(result);

  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center mx-auto">
        {result.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default page;

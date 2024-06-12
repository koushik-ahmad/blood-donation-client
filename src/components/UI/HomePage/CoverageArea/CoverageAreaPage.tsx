import dynamic from "next/dynamic";

const CoverageArea = dynamic(() => import("./CoverageArea"), {
  ssr: false,
});

const CoverageAreaPage = () => {
  return <CoverageArea />;
};

export default CoverageAreaPage;

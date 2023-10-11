import { ChangeEvent, useEffect, useState } from "react";
import SearchBackground from "../../assets/url-shortner/bg-shorten-desktop.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchContainer = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [searchResult, setSearchResult] = useState<
    { actualLink: string; shortenedLink: string }[]
  >([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [copiedIndex, setCopiedIndex] = useState<number>(-1);

  const savedData = localStorage.getItem("links");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setSearchKey(event.target.value);
  };

  const getShortenedUrl = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("url", searchKey);
    const options = {
      method: "POST",
      url: "https://url-shortener-service.p.rapidapi.com/shorten",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "24397b3c22msh5c8800231cb5539p122b57jsn9a41b7b5cbeb",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      data: encodedParams,
    };
    setLoading(true);
    try {
      const { data } = await axios.request(options);
      console.log(data);
      const { result_url } = data;
      result_url &&
        setSearchResult((prevState) => [
          ...prevState,
          { actualLink: searchKey, shortenedLink: result_url },
        ]);
    } catch (error: any) {
      setError("This domain blocked in our system");
    }

    setLoading(false);
    setSearchKey("");
  };

  const onSearch = () => {
    if (!searchKey) {
      setError("Please enter url");
      return;
    }
    if (
      savedData &&
      JSON.parse(savedData)
        .map((data: any) => data.actualLink)
        .includes(searchKey)
    ) {
      setError("Link is already present. Please try with some other links");
      return;
    }
    getShortenedUrl();
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(searchResult));
  }, [searchResult]);

  useEffect(() => {
    savedData && setSearchResult(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    copiedIndex !== -1 &&
      setTimeout(() => {
        setCopiedIndex(-1);
      }, 1000);
  }, [copiedIndex]);

  return (
    <div className="flex flex-col gap-6 mt-[-5rem] mx-[1.5rem] tablet:mx-[6rem]">
      <div className="flex flex-col px-4 tablet:px-[4rem] items-center justify-center flex-1 rounded-xl relative bg-darkViolet h-full w-full min-h-[10rem] overflow-hidden ">
        <div className="flex gap-4 z-10 w-full flex-col tablet:flex-row">
          <div className="flex flex-col gap-2 flex-1">
            <input
              className="flex-1 rounded-md px-6 py-3 h-[2.5rem] outline-none focus:border focus:border-cyan"
              placeholder="Shorten a link here..."
              value={searchKey}
              onChange={handleChange}
            />
            {error && <div className="text-red">{error}</div>}
          </div>
          <button
            className="text-white text-sm bg-cyan border-none rounded-md px-6 py-2
             font-medium hover: cursor-pointer h-[3rem] hover:opacity-[0.8]"
            onClick={onSearch}
          >
            {loading ? "Please wait..." : "Shorten It!"}
          </button>
        </div>
        <img
          src={SearchBackground}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          alt="search-bg"
        />
      </div>
      <div className="flex flex-col gap-4 ">
        {searchResult?.map((data, index) => (
          <div
            className="flex justify-between bg-white p-4 rounded-md flex-1 items-center flex-wrap"
            key={index}
          >
            <div className="break-words overflow-hidden text-sm">
              {data.actualLink}
            </div>
            <div className="flex gap-6 items-center flex-wrap">
              <a
                href={data?.shortenedLink}
                className="text-cyan break-words overflow-hidden text-sm"
              >
                {data.shortenedLink}
              </a>
              <button
                className={` ${
                  copiedIndex === index && "bg-darkViolet"
                } text-white text-sm bg-cyan border-none rounded-md px-6 py-2
             font-medium hover: cursor-pointer hover:bg-veryDarkBlue tablet:flex-auto flex-1`}
                onClick={() => {
                  navigator.clipboard.writeText(data.shortenedLink);
                  setCopiedIndex(index);
                }}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchContainer;

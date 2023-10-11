import axios from "axios";
import { useEffect, useRef, useState } from "react";

const TagInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [taggedValues, setTaggedValues] = useState<any[]>([]);
  const [availableData, setAvailableData] = useState<any[]>([]);
  const [matchedResults, setMatchedResults] = useState<any[]>([]);
  const [showOptions, toggleOptions] = useState<boolean>(false);
  const [activeText, setActiveText] = useState<string | null>("");
  const [startIndex, setStartIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedResultIndex, setSelectedResultIndex] = useState<number>(0);

  const handleInputChange = (event: any) => {
    const currentValue = event.target.value;
    setInputValue(currentValue);
  };

  const getMatchedResult = (searchString: string = "") => {
    const matchedResult = availableData.filter((data) =>
      data.name.toLowerCase().includes(searchString.toLowerCase())
    );
    !matchedResult.length && setActiveText(null);
    setMatchedResults(matchedResult);
  };

  const getAllData = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAvailableData(data.data);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "@") {
      toggleOptions(true);
      setStartIndex(event.target.selectionStart);
    }
    if (event.key === "Enter") {
      matchedResults && onSelect();
    }
    if (event.key === "Backspace") {
      setActiveText(activeText && activeText?.slice(0, -1));
    } else {
      setActiveText(activeText + event.key);
    }
    if (event.keyCode === 37) {
      setStartIndex(startIndex - 1);
      return;
    } else if (event.keyCode === 37) {
      setStartIndex(startIndex + 1);
      return;
    }
    if (event.keyCode === 38) {
      selectedResultIndex > 0
        ? setSelectedResultIndex(selectedResultIndex - 1)
        : setSelectedResultIndex(matchedResults.length - 1);
      return;
    }
    if (event.keyCode === 40) {
      matchedResults.length - 1 > selectedResultIndex
        ? setSelectedResultIndex(selectedResultIndex + 1)
        : setSelectedResultIndex(0);
      return;
    }
    activeText && getMatchedResult(activeText.split("@")?.[1]);
  };

  const replaceText = (replacementText: string, endIndex: number) => {
    const modifiedText =
      inputValue.slice(0, startIndex) +
      replacementText +
      inputValue.slice(endIndex + 1);

    return modifiedText;
  };

  const onSelect = (value: any = matchedResults[selectedResultIndex]) => {
    const currentTagged = "@" + activeText!.split("@")?.[1];

    !taggedValues.filter((data) => data.id === value.id).length &&
      setTaggedValues([...taggedValues, value]);

    const taggedValue = replaceText(
      "@" + value?.name + " ",
      startIndex + currentTagged.length - 1
    );
    setInputValue(taggedValue);
    toggleOptions(false);
    setMatchedResults([]);
    setActiveText("");
    setSelectedResultIndex(0);
    inputRef.current && inputRef.current.focus();
  };

  const handleClick = (event: any) => {
    setStartIndex(event.target.selectionStart);
  };

  const escapeRegExp = (str: string) =>
    str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

  const highlightSearchedKeyword = (text: string) => {
    const searchText = activeText!.split("@")?.[1];
    const pattern = new RegExp(`(${escapeRegExp(searchText)})`, "i");

    if (searchText) {
      return text
        .split(pattern)
        .map((alphabet, index) =>
          pattern.test(alphabet) ? <b key={index}>{alphabet}</b> : alphabet
        );
    }
    return text;
  };

  useEffect(() => {
    if (!showOptions) {
      setActiveText("");
    }
  }, [showOptions]);

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    if (!matchedResults.length) {
      toggleOptions(false);
      setActiveText("");
    }
  }, [matchedResults]);

  return (
    <div className="flex flex-1 justify-end h-full bg-neutral-200 relative">
      {showOptions && (
        <div className="flex flex-col bg-white rounded-lg absolute bottom-[4rem] w-fit left-2 py-2 ">
          {matchedResults.map((data, index) => (
            <div
              className={`p-2 ${
                selectedResultIndex === index ? "bg-lime-100" : ""
              }`}
              onClick={() => onSelect(data)}
              key={index}
            >
              {highlightSearchedKeyword(data.name)}
            </div>
          ))}
        </div>
      )}
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        ref={inputRef}
        className="p3 p-4 rounded-t-md flex-1 self-end outline-none"
        placeholder="Enter your message here.."
      />
    </div>
  );
};
export default TagInput;

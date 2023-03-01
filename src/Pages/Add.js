/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
// import ImageUpload from "../Components/ImageUpload";
import InputField from "../Components/InputField";
import MultiSelect from "../Components/MultiSelect";
import SelectComponent from "../Components/SelectComponent";
import TextAreaField from "../Components/TextAreaField";
import { DropdownItems, TypeItems } from "../data";
import { db } from "../firebase";

function Add() {
  const [newBait, setBait] = useState({
    name: "",
    groupType: [],
    type: [],
    season: [],
    waterTemp: [],
    timeOfDay: [],
    waterClarity: [],
    opacity: [],
    wind: [],
    depth: [],
    weatherCondition: [],
    structure: [],
    behavior: [],
    instruction: [],
    current: [],
    pattern: [],
    line: [],
    pound: [],
    imageUri: "",
    addInfo: "",
    instructionDec: "",
    patternDec: {
      spring: "",
      summer: "",
      fall: "",
      winter: "",
    },
    structureDec: {
      general: "",
      spring: "",
      summer: "",
      fall: "",
      winter: "",
    },
  });
  const [base64Data, setBaes64Data] = useState(null);

  const ImageUpload = () => {
    const onChange = (e) => {
      let file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => _handleReaderLoaded(e);
        reader.readAsBinaryString(file);
      }
    };

    const _handleReaderLoaded = (e) => {
      let binaryString = e.target.result;
      setBaes64Data(btoa(binaryString));
    };

    return (
      <div className="w-[300px] h-fit p-3 ">
        <input
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => onChange(e)}
        />
        <br />
        {base64Data != null && (
          <div className="w-full h-[200px] p-3">
            <img
              className="w-full h-full"
              src={`data:image/png;base64,${base64Data}`}
            />
          </div>
        )}
      </div>
    );
  };
  const handleChange = (e, stateName) => {
    setBait({ ...newBait, [stateName]: e.target.value });
  };

  const handleMulti = (target, stateName) => {
    const temp = [];
    target.map((item) => temp.push(item.value));
    setBait({ ...newBait, [stateName]: temp });
  };

  const handleSelect = (target, stateName) => {
    setBait({ ...newBait, [stateName]: target });
  };

  const handleSeasonPattern = (e, seasonName) => {
    const temp = newBait.patternDec;
    temp[seasonName] = e.target.value;
    setBait({ ...newBait, patternDec: temp });
  };

  const handleSeasonStructure = (e, seasonName) => {
    const temp = newBait.structureDec;
    temp[seasonName] = e.target.value;
    setBait({ ...newBait, structureDec: temp });
  };

  // const getStringArray = () => {
  //   let temp = [];
  //   return temp;
  // };

  const handleSubmit = async () => {
    const baitData = {
      name: newBait.name,
      groupType: newBait.groupType.value,
      type: newBait.type.value,
      season: newBait.season,
      waterTemp: newBait.waterTemp,
      timeOfDay: newBait.timeOfDay,
      waterClarity: newBait.waterClarity,
      pattern: newBait.pattern,
      opacity: newBait.opacity,
      wind: newBait.wind,
      depth: newBait.depth,
      weatherCondition: newBait.weatherCondition,
      structure: newBait.structure,
      instruction: newBait.instruction,
      behavior: newBait.behavior,
      current: newBait.current.value,
      line: newBait.line,
      pound: newBait.pound,
      imageUri: base64Data,
      additionalInfo: newBait.addInfo,
      instructionDec: newBait.instructionDec,
      patternDec: newBait.patternDec,
      structureDec: newBait.structureDec,
    };
    console.log("44444444444", baitData);

    try {
      await addDoc(collection(db, "baits"), baitData);
    } catch (error) {
      console.error("Add Error! ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-center text-[30px] text-sky-700 mb-2 border-b-2 border-sky-700">
        Add New Bait
      </p>
      <div className="border-sky-500 p-5 rounded-lg border-2 w-[90%] h-fit">
        <InputField
          type="text"
          value={newBait.name}
          placeholder="Bait Name"
          label="Name"
          name="name"
          styles="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => handleChange(e, "name")}
        />

        <div className="w-full flex items-center justify-center">
          <ImageUpload />
        </div>

        <div className="flex flex-wrap">
          <SelectComponent
            name="groupType"
            options={DropdownItems.type}
            styles=""
            value={newBait.groupType}
            onChange={(e) => handleSelect(e, "groupType")}
          />
          <SelectComponent
            name="subType"
            options={TypeItems[newBait.groupType.value]}
            styles=""
            value={newBait.type}
            onChange={(e) => handleSelect(e, "type")}
          />
          <MultiSelect
            name="season"
            options={DropdownItems.season}
            styles=""
            // value={newBait.season}
            onChange={(e) => handleMulti(e, "season")}
          />
          <MultiSelect
            name="waterTemp"
            options={DropdownItems.waterTemp}
            styles=""
            // value={newBait.waterTemp}
            onChange={(e) => handleMulti(e, "waterTemp")}
          />
          <MultiSelect
            name="timeOfDay"
            options={DropdownItems.timeOfDay}
            styles=""
            // value={newBait.timeOfDay}
            onChange={(e) => handleMulti(e, "timeOfDay")}
          />
          <MultiSelect
            name="waterClarity"
            options={DropdownItems.waterClarity}
            styles=""
            // value={newBait.waterClarity}
            onChange={(e) => handleMulti(e, "waterClarity")}
          />
          <MultiSelect
            name="opacity"
            options={DropdownItems.opacity}
            styles=""
            // value={newBait.opacity}
            onChange={(e) => handleMulti(e, "opacity")}
          />
          <MultiSelect
            name="wind"
            options={DropdownItems.wind}
            styles=""
            // value={newBait.wind}
            onChange={(e) => handleMulti(e, "wind")}
          />
          <MultiSelect
            name="depth"
            options={DropdownItems.depth}
            styles=""
            // value={newBait.depth}
            onChange={(e) => handleMulti(e, "depth")}
          />
          <MultiSelect
            name="weatherCondition"
            options={DropdownItems.weatherCondition}
            styles=""
            // value={newBait.weatherCondition}
            onChange={(e) => handleMulti(e, "weatherCondition")}
          />
          <MultiSelect
            name="structure"
            options={DropdownItems.structure}
            styles=""
            // value={newBait.structure}
            onChange={(e) => handleMulti(e, "structure")}
          />
          <MultiSelect
            name="behavior"
            options={DropdownItems.behavior}
            styles=""
            // value={newBait.behavior}
            onChange={(e) => handleMulti(e, "behavior")}
          />
          <MultiSelect
            name="instruction"
            options={DropdownItems.instruction}
            styles=""
            // value={newBait.instruction}
            onChange={(e) => handleMulti(e, "instruction")}
          />
          <SelectComponent
            name="current"
            options={DropdownItems.current}
            styles=""
            value={newBait.current}
            onChange={(e) => handleSelect(e, "current")}
          />
          <MultiSelect
            name="pattern"
            options={DropdownItems.pattern}
            styles=""
            // value={newBait.pattern}
            onChange={(e) => handleMulti(e, "pattern")}
          />
          <MultiSelect
            name="line"
            options={DropdownItems.line}
            styles=""
            // value={newBait.line}
            onChange={(e) => handleMulti(e, "line")}
          />
          <MultiSelect
            name="pound"
            options={DropdownItems.pound}
            styles=""
            // value={newBait.pound}
            onChange={(e) => handleMulti(e, "pound")}
          />
        </div>

        <div className="flex flex-wrap w-full">
          <p className="text-[20px] text-sky-700 w-full text-left p-5">
            Additional Information & Instruction
          </p>
          <TextAreaField
            placeholder="Additional Information"
            name="addInfo"
            onChange={(e) => handleChange(e, "addInfo")}
            value={newBait.addInfo}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Instruction"
            name="instructionDec"
            onChange={(e) => handleChange(e, "instructionDec")}
            value={newBait.instructionDec}
            styles="w-full p-2 border-2 rounded-lg"
          />

          <p className="text-[20px] text-sky-700 w-full text-left p-5">
            Pattern
          </p>
          <TextAreaField
            placeholder="Pattern for Spring"
            name="Pattern for Spring"
            onChange={(e) => handleSeasonPattern(e, "spring")}
            value={newBait.patternDec.spring}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Pattern for Summer"
            name="Pattern for Summer"
            onChange={(e) => handleSeasonPattern(e, "summer")}
            value={newBait.patternDec.summer}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Pattern for Fall"
            name="Pattern for Fall"
            onChange={(e) => handleSeasonPattern(e, "fall")}
            value={newBait.patternDec.fall}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Pattern for Winter"
            name="Pattern for Winter"
            onChange={(e) => handleSeasonPattern(e, "winter")}
            value={newBait.patternDec.winter}
            styles="w-full p-2 border-2 rounded-lg"
          />

          <p className="text-[20px] text-sky-700 w-full text-left p-5">
            Structure
          </p>
          <TextAreaField
            placeholder="Structure for General"
            name="Structure for General"
            onChange={(e) => handleSeasonStructure(e, "general")}
            value={newBait.structureDec.general}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Structure for Spring"
            name="Structure for Spring"
            onChange={(e) => handleSeasonStructure(e, "spring")}
            value={newBait.structureDec.spring}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Structure for Summer"
            name="Structure for Summer"
            onChange={(e) => handleSeasonStructure(e, "summer")}
            value={newBait.structureDec.summer}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Structure for Fall"
            name="Structure for Fall"
            onChange={(e) => handleSeasonStructure(e, "fall")}
            value={newBait.structureDec.fall}
            styles="w-full p-2 border-2 rounded-lg"
          />
          <TextAreaField
            placeholder="Structure for Winter"
            name="Structure for Winter"
            onChange={(e) => handleSeasonStructure(e, "winter")}
            value={newBait.structureDec.winter}
            styles="w-full p-2 border-2 rounded-lg"
          />
        </div>

        <div className="w-full flex justify-end items-center px-5">
          <button
            className="border-2 rounded-lg border-sky-400 py-5 px-10"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;

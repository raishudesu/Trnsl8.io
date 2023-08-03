import { useState } from "react";
import {
  Select,
  Container,
  Flex,
  Textarea,
  Button,
  CopyButton,
  ActionIcon,
  Tooltip,
  Loader,
} from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import Languages from "../data/languages.json";

const TranslateContainer = () => {
  const [inputText, setInputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedTranslation, setSelectedTranslation] = useState<string | null>(
    null
  );
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${selectedLanguage}|${selectedTranslation}`
      );
      const translation = await data.json();

      setTranslatedText(translation.responseData.translatedText);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleInputTextChange = (event: any | string) => {
    setInputText(event.target.value);
  };
  const submitInputFields = () => {
    translateText();
  };

  return (
    <div>
      <Container size="sm">
        <Flex direction={"column"} justify={"center"} align={"center"} gap={12}>
          {loading ? <Loader size={20} /> : null}
          <Flex direction={"column"}>
            <Container w={"100%"}>
              <Flex justify={"center"} align={"center"} gap={12} wrap="wrap">
                <Select
                  w={"100%"}
                  label="Select Your Language"
                  placeholder="Select Language"
                  searchable
                  nothingFound="No options"
                  data={Languages.map(({ name }) => {
                    return name;
                  })}
                  value={selectedLanguage}
                  onChange={setSelectedLanguage}
                />
                <Select
                  w={"100%"}
                  label="Select Translation"
                  placeholder="Select Language"
                  searchable
                  nothingFound="No options"
                  data={Languages.map(({ name }) => {
                    return name;
                  })}
                  value={selectedTranslation}
                  onChange={setSelectedTranslation}
                />
              </Flex>
            </Container>
            <Container w={"100%"}>
              <Flex direction={"column"} gap={12}>
                <Textarea
                  placeholder="Enter Text"
                  label="Enter Text"
                  withAsterisk
                  autosize
                  value={inputText}
                  onChange={handleInputTextChange}
                />
              </Flex>
            </Container>
            <Container w={"100%"}>
              <Flex direction={"column"} gap={12}>
                <Textarea
                  placeholder="Result"
                  label="Translation"
                  value={translatedText ? translatedText : undefined}
                  readOnly
                />
                <CopyButton value={translatedText} timeout={2000}>
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? "Copied" : "Copy"}
                      withArrow
                      position="right"
                    >
                      <ActionIcon
                        color={copied ? "teal" : "gray"}
                        onClick={copy}
                      >
                        {copied ? (
                          <IconCheck size="1.3rem" />
                        ) : (
                          <IconCopy size="1.3rem" />
                        )}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              </Flex>
            </Container>
          </Flex>
          <Button onClick={submitInputFields}>Translate</Button>
        </Flex>
      </Container>
    </div>
  );
};

export default TranslateContainer;

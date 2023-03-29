import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  sp: { label: "Spanish", dir: "ltr", active: false },
  fr: { label: "Français", dir: "ltr", active: true },
};
function LanguageSelect() {
  const { t } = useTranslation();
  const [menuAnchor, setMenuAnchor] = React.useState(false);
  const selected = localStorage.getItem("i18nextLng") || " English";

  return (
    <div className="item">
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {selected}
        <LanguageIcon fontSize="small" />
      </Button>

      <Popover
        open={menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListSubheader>{t("select_language")}</ListSubheader>
          {Object.keys(languageMap)?.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                i18next.changeLanguage(item);
                setMenuAnchor(null);
              }}
              sx={{ cursor: "pointer" }}
            >
              {languageMap[item].label}
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}

export default LanguageSelect;

import * as React from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface BreadcrumbItem {
  href?: string;
  title: string;
  onClick?: () => void;
}

export const Breadcrumbs: React.FC<{ breadcrumbs: BreadcrumbItem[] }> = ({
  breadcrumbs,
}) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((crumb: BreadcrumbItem) => {
          return (
            <Link
              underline="hover"
              color="inherit"
              style={{ cursor: "pointer" }}
              onClick={crumb.onClick}
            >
              {crumb.title}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </div>
  );
};

"use client";
import { FC } from "react";
import s from "./styles/Table.module.scss";

// Icons
import { Check, X } from "lucide-react";
// NextUi
import {
  Table as UITable,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export const Table: FC = ({}) => {
  const DATA_TABLE_HEADER = [
    {
      title: "",
      price: "",
    },
    {
      title: "W-Start",
      price: "$300",
    },
    {
      title: "W-Base",
      price: "$500",
    },
    {
      title: "W-Growth",
      price: "$700",
    },
    {
      title: "W-Ultimate",
      price: "$1100",
    },
    {
      title: "E-commerce",
      price: "$850",
    },
  ];
  const DATA_TABLE_BODY = [
    {
      row: [
        {
          title: "Design type",
        },
        {
          info: "Basic design. This option is for people who do not have time for website development.",
        },
        {
          info: "Simple design with the selection of the color palette, fonts, and backgrounds for your website",
        },
        {
          info: "Advanced design that includes the selection of the color palette, fonts, and backgrounds, as well as using gradients",
        },
        {
          info: "Exclusive design that includes the creation of unique icons, images, and backgrounds",
        },
        {
          info: "Simple design with an option of using gradients on the backgrounds when needed",
        },
      ],
    },
    {
      row: [
        {
          title: "Number of pages",
        },
        {
          info: "3",
        },
        {
          info: "4",
        },
        {
          info: "5",
        },
        {
          info: "7",
        },
        {
          info: "5+",
        },
      ],
    },
    {
      row: [
        {
          title: "Prototyping (all pages)",
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "The software on which the design is developed",
        },
        {
          info: "WebPoster",
        },
        {
          info: "WebPoster",
        },
        {
          info: "WebPoster",
        },
        {
          info: "WebPoster",
        },
        {
          info: "WebPoster",
        },
      ],
    },
    {
      row: [
        {
          title: "Mobile version",
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "Logo creation",
        },
        {
          info: "Text logo (vector format is not included)",
        },
        {
          info: "Text logo (vector format is not included)",
        },
        {
          info: "Text logo in vector format",
        },
        {
          info: "Text logo in vector format",
        },
        {
          info: "Text logo in vector format",
        },
      ],
    },
    {
      row: [
        {
          title: "Images",
        },
        {
          info: "Stock images",
        },
        {
          info: "Stock images",
        },
        {
          info: "Edited stock images",
        },
        {
          info: "Edited stock images",
        },
        {
          info: "Edited stock images",
        },
      ],
    },
    {
      row: [
        {
          title: "Icons",
        },
        {
          info: "Icons from WebPoster base",
        },
        {
          info: "Stock icons",
        },
        {
          info: "Stock icons",
        },
        {
          info: "Exclusive icons created by our designer",
        },
        {
          info: "Stock icons",
        },
      ],
    },
    {
      row: [
        {
          title: "Editing photos to match your common site style",
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "Animations",
        },
        {
          info: "Animations that are available in the editor",
        },
        {
          info: "Animations that are available in the editor + animations using CSS",
        },
        {
          info: "Creating animations using CSS",
        },
        {
          info: "Creating animations using CSS and JS",
        },
        {
          info: "Creating animations using CSS",
        },
      ],
    },
    {
      row: [
        {
          title: "Pop-up creation",
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
        {
          info: (
            <Check
              strokeWidth={2}
              className="text-blue dark:text-green"
              size={18}
            />
          ),
        },
      ],
    },
    {
      row: [
        {
          title: "Backgrounds editing",
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: "Adding different shades",
        },
        {
          info: "Adding different shades and gradients",
        },
        {
          info: "Adding gradients, images, and complex geometric shapes",
        },
        {
          info: "Adding gradients and complex geometric shapes",
        },
      ],
    },
    {
      row: [
        {
          title: "Number of edits included",
        },
        {
          info: "2",
        },
        {
          info: "2",
        },
        {
          info: "2",
        },
        {
          info: "3",
        },
        {
          info: "3",
        },
      ],
    },
    {
      row: [
        {
          title: "Discount on filling your site with content",
        },
        {
          info: <X strokeWidth={2} className="text-red-300" size={18} />,
        },
        {
          info: "10%",
        },
        {
          info: "15%",
        },
        {
          info: "20%",
        },
        {
          info: "15%",
        },
      ],
    },
  ];
  // Animation
  const animation = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <section className={`${s.TableWrapper} bg-white dark:bg-black `}>
      <UITable
        classNames={{
          wrapper: "p-3",
        }}
        shadow="md"
        isStriped
        aria-label="Prices table"
      >
        <TableHeader>
          {DATA_TABLE_HEADER.map((data, i) => (
            <TableColumn
              key={i}
              className=" text-center bg-black dark:bg-black_secondary text-white py-1 "
            >
              <h5 className=" text-lg lg:text-xl font-medium ">{data.title}</h5>
              <p className="text-green text-sm font-normal">{data.price}</p>
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {DATA_TABLE_BODY.map((data, i) => (
            <TableRow key={i}>
              {data.row.map((cell, i) => (
                <TableCell
                  key={i}
                  className="border-r-1 border-gray/10 py-6 last:border-none"
                >
                  <h5 className="text-sm lg:text-base font-semibold text-black dark:text-white ">
                    {cell.title}
                  </h5>
                  <p className="text-center font-normal  text-gray text-xs lg:text-sm grid place-items-center">
                    {cell.info}
                  </p>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </UITable>
    </section>
  );
};

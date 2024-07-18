import { FC, useState } from "react";
import AddIcon from "../Icon/Gmail/AddIcon";
import ArrowIcon from "../Icon/Gmail/ArrowIcon";
import IucideTriangleAlertIcon from "../Icon/Gmail/IucideTriangleAlertIcon";

interface Email {
  id: number;
  name: string;
}

const Gmail: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [gmail, setGmail] = useState<Email>({
    id: 0,
    name: "",
  });
  const listGmail: Email[] = [
    {
      id: 1,
      name: "tdanh263@gmail.com",
    },
    {
      id: 2,
      name: "tducanh264@gmail.com",
    },
    {
      id: 3,
      name: "tdnh265@gmail.com",
    },
    {
      id: 4,
      name: "tducanh2@gmail.com",
    },
  ];

  const handleChooseGmail = (item: Email) => {
    setGmail(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
    <div className="flex w-full items-center justify-between gap-5">
      <button
        className="ring-none relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
        type="button"
        id="radix-:rg:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        onClick={() => setIsOpen(!isOpen)}
      >
        {gmail.id === 0 ? "All accounts" : gmail.name}
        <ArrowIcon />
      </button>

      <button
        className="ring-none inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow outline-none transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
        type="button"
        id="radix-:r2:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <span className="mr-2">
          <AddIcon />
        </span>
        Add emails
      </button>

      {isOpen && (
        <div className="absolute left-[324px] top-[252px] z-50 rounded-md border border-input bg-background p-2">
          <div className="flex cursor-pointer items-center p-1 hover:bg-accent hover:text-accent-foreground">
            All accounts
          </div>
          {listGmail.map((item) => (
            <div
              className="cursor-pointer p-1 hover:bg-accent hover:text-accent-foreground"
              key={item.id}
              onClick={() => handleChooseGmail(item)}
            >
              {item.name}
            </div>
          ))}
          <div className="flex cursor-pointer items-center p-1 hover:bg-accent hover:text-accent-foreground">
            <AddIcon />
            Add emails
          </div>
        </div>
      )}

    </div>
      <div
        role="alert"
        className="mt-[20px] flex items-center relative w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground "
      >
        <IucideTriangleAlertIcon/>
        <h5 className="font-medium leading-none tracking-tight">
          Heads up!
        </h5>
        <div className="ml-2 text-sm">
          We are in the process of getting SOC2 Certification. It's safe to
          proceed through the Google Authentication warning screen.
        </div>
      </div>

      <div className="w-full space-y-4 py-4">
        <div className="font-bold tracking-tight">Gmail</div>
        <div className="flex w-full flex-wrap items-center justify-between gap-2 md:flex-nowrap">
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search for file"
          />
        </div>
        <div className="rounded-md border">
          <span data-state="closed">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <tbody className="[&amp;_tr:last-child]:border-0">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td
                      className="[&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] h-24 p-2 text-center align-middle"
                      colSpan={4}
                    >
                      No results.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Gmail;

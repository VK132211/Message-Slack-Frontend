import { FaChevronDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
export const ChannelHeader = ({ name }) => {
  return (
    <div className="bg-white border-b h-[50px] flex items-center px-4 overflow-hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-lg font-semibold px-2 w-auto overflow-hidden">
            <span># {name} </span>
            <FaChevronDown className="size-3 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle># {name}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4 flex flex-col gap-y-2">
            <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Channel name</p>
                <p className="text-sm font-semibold">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Channel</DialogTitle>
                        <DialogDescription>
                          Make changes to your channel here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </p>
              </div>
              <p className="text-sm">{name}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

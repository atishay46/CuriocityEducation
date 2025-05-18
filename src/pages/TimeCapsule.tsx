import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface TimeCapsule {
  id: string;
  title: string;
  content: string;
  openDate: Date;
  createdAt: Date;
}

const TimeCapsule = () => {
  const [capsules, setCapsules] = useState<TimeCapsule[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [openDate, setOpenDate] = useState<Date>();

  const addCapsule = () => {
    if (!title.trim() || !content.trim() || !openDate) return;

    const newCapsule: TimeCapsule = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      openDate,
      createdAt: new Date(),
    };

    setCapsules([newCapsule, ...capsules]);
    setTitle("");
    setContent("");
    setOpenDate(undefined);
  };

  const deleteCapsule = (id: string) => {
    setCapsules(capsules.filter((capsule) => capsule.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Time Capsule</h1>
      
      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Create New Time Capsule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Capsule Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                placeholder="Write your message here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[100px]"
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !openDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {openDate ? format(openDate, "PPP") : "Pick a date to open"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={openDate}
                    onSelect={setOpenDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Button onClick={addCapsule} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Create Capsule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {capsules.map((capsule) => (
          <Card key={capsule.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{capsule.title}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteCapsule(capsule.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{capsule.content}</p>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <p>Created: {capsule.createdAt.toLocaleString()}</p>
                <p>Opens: {capsule.openDate.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TimeCapsule;

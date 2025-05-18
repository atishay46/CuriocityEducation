import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Notes</h1>
      
      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Add New Note</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="Note Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                placeholder="Write your note here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[100px]"
              />
              <Button onClick={addNote} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Note
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{note.title}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteNote(note.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{note.content}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {note.createdAt.toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notes;

import { useState } from 'react';
import { Plus, Send, MessageSquare, Bell, Mail, Users, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockAnnouncements = [
  { id: 1, title: 'New Admission Open', content: 'Admissions for the new academic year 2024-25 are now open...', date: '2024-08-15', author: 'Admin', priority: 'High', recipients: 'All Institutes' },
  { id: 2, title: 'Holiday Notice', content: 'Independence Day holiday on August 15th. All institutes will remain closed...', date: '2024-08-10', author: 'HR Department', priority: 'Medium', recipients: 'All Staff' },
  { id: 3, title: 'Exam Schedule Released', content: 'Mid-term examination schedule has been released. Please check the academic calendar...', date: '2024-08-08', author: 'Academic Office', priority: 'High', recipients: 'Students & Faculty' },
];

const mockMessages = [
  { id: 1, from: 'Dr. Priya Sharma', to: 'Admin', subject: 'Budget Approval Request', preview: 'I would like to request approval for the new laboratory equipment budget...', date: '2024-08-15', status: 'Unread' },
  { id: 2, from: 'Rahul Kumar', to: 'Fee Department', subject: 'Fee Payment Confirmation', preview: 'I have paid my semester fees. Please confirm the receipt...', date: '2024-08-14', status: 'Read' },
  { id: 3, from: 'Parent - Sneha Reddy', to: 'Class Teacher', subject: 'Absence Notice', preview: 'My daughter will be absent tomorrow due to medical appointment...', date: '2024-08-13', status: 'Read' },
];

export function CommunicationCenter() {
  const [announcements] = useState(mockAnnouncements);
  const [messages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState({ to: '', subject: '', content: '' });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Communication Center</h1>
          <p className="text-muted-foreground">Manage announcements, messages, and notifications</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Announcement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{messages.length}</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{messages.filter(m => m.status === 'Unread').length}</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Announcements</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{announcements.length}</div>
            <p className="text-xs text-muted-foreground">Currently visible</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recipients Reached</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Last announcement</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="announcements" className="w-full">
        <TabsList>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="announcements">
          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{announcement.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{announcement.content}</p>
                      </div>
                      <Badge variant={
                        announcement.priority === 'High' ? 'destructive' :
                        announcement.priority === 'Medium' ? 'secondary' : 'outline'
                      }>
                        {announcement.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {announcement.author} • {announcement.date}</span>
                      <span>To: {announcement.recipients}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Message Inbox</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id} className={`border rounded-lg p-4 cursor-pointer hover:bg-muted/50 ${message.status === 'Unread' ? 'bg-muted/20' : ''}`}>
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt={message.from} />
                        <AvatarFallback>{message.from.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm">{message.from}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">{message.date}</span>
                            {message.status === 'Unread' && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm font-medium text-foreground">{message.subject}</p>
                        <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compose">
          <Card>
            <CardHeader>
              <CardTitle>Compose Message</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">To</label>
                  <Input 
                    placeholder="Select recipients..." 
                    value={newMessage.to}
                    onChange={(e) => setNewMessage({...newMessage, to: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    placeholder="Enter subject..." 
                    value={newMessage.subject}
                    onChange={(e) => setNewMessage({...newMessage, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Type your message here..." 
                    rows={6}
                    value={newMessage.content}
                    onChange={(e) => setNewMessage({...newMessage, content: e.target.value})}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Message Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Fee Reminder</h3>
                  <p className="text-sm text-muted-foreground mt-1">Template for fee payment reminders</p>
                  <Button size="sm" variant="outline" className="mt-2">Use Template</Button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Admission Confirmation</h3>
                  <p className="text-sm text-muted-foreground mt-1">Welcome message for new admissions</p>
                  <Button size="sm" variant="outline" className="mt-2">Use Template</Button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold">Exam Schedule</h3>
                  <p className="text-sm text-muted-foreground mt-1">Notification for exam schedules</p>
                  <Button size="sm" variant="outline" className="mt-2">Use Template</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
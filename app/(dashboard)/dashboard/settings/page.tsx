"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            </div>
            <div className="grid gap-4 max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>Manage your dashboard preferences.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <label className="text-base font-medium">Email Notifications</label>
                                <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
                            </div>
                            {/* Toggle would go here, using a simple checkbox for now */}
                            <input type="checkbox" className="h-4 w-4" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <label className="text-base font-medium">Marketing Emails</label>
                                <p className="text-sm text-muted-foreground">Receive emails about new features and offers.</p>
                            </div>
                            <input type="checkbox" className="h-4 w-4" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Preferences</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

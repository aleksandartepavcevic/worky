import React from 'react';
import { DialogProps } from '@radix-ui/react-dialog';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import Form from './components/form';

function CreateProject({ open, onOpenChange }: DialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Create project</DialogTitle>
                    <DialogDescription>
                        Edit project details anytime in project settings.
                    </DialogDescription>
                </DialogHeader>
                <Form />
            </DialogContent>
        </Dialog>
    );
}

export default CreateProject;

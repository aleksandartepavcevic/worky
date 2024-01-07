'use client';

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Form as FormUI,
} from '@/components/ui/form';
import { DialogContext, DialogFooter } from '@/components/ui/dialog';
import { LoadingButton } from '@/components/ui/button';
import { yup, yupResolver } from '@/lib/yup/client';
import { REQUIRED_FIELD } from '@/constants/messages';
import { createProject } from '../actions/create-project';
import { Tables } from '@/types/supabase';
import KeyFormField from './key-form-field';

export type FormValues = Omit<Tables<'projects'>, 'accountId' | 'id'>;

const schema = yup.object({
    name: yup.string().required(REQUIRED_FIELD),
    key: yup.string().required(REQUIRED_FIELD),
    template: yup.string().required(REQUIRED_FIELD),
    type: yup.string().required(REQUIRED_FIELD),
});

function Form() {
    const { onOpenChange } = useContext(DialogContext) || {};
    const methods = useForm<FormValues>({
        defaultValues: {
            name: '',
            key: '',
            template: '',
            type: undefined,
        },
        resolver: yupResolver<FormValues>(schema),
    });

    const { control, handleSubmit, formState } = methods;

    const onSubmit = async (values: FormValues) => {
        const res = await createProject(values);

        if (res?.error) console.log(res?.error.message);

        onOpenChange?.(false);
    };

    return (
        <FormUI {...methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 gap-4 py-4">
                <div className="col-span-3">
                    <FormField
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        aria-label="name"
                                        type="text"
                                        id="name"
                                        placeholder="Try a team name, project goal, milestone..."
                                        required
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-1">
                    <KeyFormField />
                </div>
                <div className="col-span-2">
                    <FormField
                        control={control}
                        name="template"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Template</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a template" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="kanban">
                                                    Kanban
                                                </SelectItem>
                                                <SelectItem value="scrum">
                                                    Scrum
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="col-span-2">
                    <FormField
                        control={control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="team-managed">
                                                    Team-managed
                                                </SelectItem>
                                                <SelectItem value="company-managed">
                                                    Company-managed
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
            <DialogFooter>
                <LoadingButton loading={formState.isSubmitting} type="submit">
                    Create
                </LoadingButton>
            </DialogFooter>
        </FormUI>
    );
}

export default Form;

'use client';

import React, { useContext } from 'react';
import { Info } from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import Typography from '@/components/ui/typography';
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
                    <FormField
                        control={control}
                        name="key"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="inline-flex gap-1">
                                    Key{' '}
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <Info className="w-4 h-4 stroke-yellow-500 cursor-pointer" />
                                        </HoverCardTrigger>
                                        <HoverCardContent className="text-start font-normal">
                                            <Typography variant="p">
                                                Choose a descriptive prefix for
                                                your project&apos;s issue keys
                                                to recognize work from this
                                                project.
                                            </Typography>
                                        </HoverCardContent>
                                    </HoverCard>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        aria-label="key"
                                        type="text"
                                        id="key"
                                        required
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
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

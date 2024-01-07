'use client';

import { Info } from 'lucide-react';
import React, { memo, useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import Typography from '@/components/ui/typography';

function KeyFormField() {
    const { control, watch, setValue } = useFormContext();

    const name = watch('name') as string;

    const parsedNameMemoized = useMemo(
        () => name.slice(0, 3).toUpperCase(),
        [name],
    );

    useEffect(() => {
        setValue('key', parsedNameMemoized);
    }, [parsedNameMemoized, setValue]);

    return (
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
                                    Choose a descriptive prefix for your
                                    project&apos;s issue keys to recognize work
                                    from this project.
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
    );
}

export default memo(KeyFormField);

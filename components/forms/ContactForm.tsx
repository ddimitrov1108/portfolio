"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";
import Textarea from "../ui/textarea";
import Input from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Button from "../ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import DOMPurify from "dompurify";

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const { sendEmail } = await import("@/actions/send-email");

    await sendEmail({
      ...data,
      description: DOMPurify.sanitize(data.description),
    })
      .then(() => {
        toast.success("Your message was sent.");
      })
      .catch((e) => {
        toast.error((e as Error).message);
      });

    form.reset();
  };

  const isFormDisabled = form.formState.isSubmitting;
  const onSubmitHandler = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmitHandler}
        className="!bg-opacity-100 p-4 py-8 sm:p-6 xl:p-10 rounded-md bg-background border border-input max-w-screen-sm space-y-4"
      >
        <div className="flex flex-col gap-y-4 lg:flex-row items-center gap-x-4 justify-between">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    minLength={3}
                    maxLength={30}
                    placeholder="Daniel D."
                    disabled={isFormDisabled}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    minLength={3}
                    maxLength={80}
                    placeholder="name@example.com"
                    disabled={isFormDisabled}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    title="Select subject"
                    disabled={isFormDisabled}
                  >
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="front-end-development">
                    Front-End Development
                  </SelectItem>
                  <SelectItem value="ui-ux-development">
                    UI/UX Development
                  </SelectItem>
                  <SelectItem value="software-development">
                    Software Development
                  </SelectItem>
                  <SelectItem value="general-task">General Task</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me what do you want to talk about"
                  className="resize-none"
                  maxLength={500}
                  cols={80}
                  disabled={isFormDisabled}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="!mt-8 flex flex-col-reverse gap-y-8 lg:items-center lg:flex-row lg:justify-between">
          <p className="text-left text-sm text-foreground">
            Hate Contact Forms?
            <br />
            <Link
              href="mailto:ddimitrov1108@gmail.com"
              title="Email Me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Mail size={18} />
              Email Me
            </Link>
          </p>

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full lg:w-fit"
            disabled={isFormDisabled}
            loading={isFormDisabled}
          >
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ContactForm;

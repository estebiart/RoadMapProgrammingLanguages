import type { Meta, StoryObj } from "@storybook/react"
import Home from "./Home"

const meta = {
    title: 'Home',
    component: Home,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof Home>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;

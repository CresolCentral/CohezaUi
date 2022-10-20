import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from ".";
import { FaSearch } from "react-icons/fa";

export default {
  title: "Components/Avatar",
  component: Avatar,
  args: {},
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      description: "Define o tamanho do avatar",
      control: {
        type: "inline-radio",
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    urlImage: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {};

export const AvatarLabel: StoryObj<AvatarProps> = {
  args: {
    label: "John Doe",
    size: "sm",
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    urlImage: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
};

export const AvatarImage: StoryObj<AvatarProps> = {
  args: {
    urlImage:
      "https://t2.ea.ltmcdn.com/pt/posts/6/8/3/caracteristicas_dos_gatos_amarelos_22386_600_square.jpg",
    size: "sm",
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    urlImage: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
};

export const AvatarCustomIcon: StoryObj<AvatarProps> = {
  args: {
    icon: <FaSearch />,
    size: "sm",
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    urlImage: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
  },
};

import Button from "./components/Button";
import { FaPlus, FaUserAlt } from "react-icons/fa";
import "./styles/global.css";
import TextField from "./components/TextField";
import Alert from "./components/Alert/Alert";
import Select from "./components/Select";
import SelectItem from "./components/SelectItem";

export function App() {
  return (
    <>
      <div className="w-full flex bg-default-900 p-20">
        <div className="flex flex-col w-full gap-2">
          <Alert.Root size="sm" type="success">
            <Alert.Message>Success Alert</Alert.Message>
          </Alert.Root>
          <Alert.Root size="sm" type="warning">
            <Alert.Message>Warning Alert</Alert.Message>
          </Alert.Root>
          <Alert.Root size="sm" type="info">
            <Alert.Message>Info Alert</Alert.Message>
          </Alert.Root>
          <Alert.Root size="sm" type="danger">
            <Alert.Message>Danger Alert</Alert.Message>
          </Alert.Root>
        </div>
        <div className="flex flex-col w-full gap-2">
          <Alert.Root icon size="sm" type="success">
            <Alert.Message>Success Alert</Alert.Message>
          </Alert.Root>
          <Alert.Root icon size="sm" type="warning">
            <Alert.Message>Warning Alert</Alert.Message>
          </Alert.Root>
          <Alert.Root icon size="sm" type="info">
            <Alert.Message>Info Alert</Alert.Message>
          </Alert.Root>
          <Alert.Root icon size="sm" type="danger">
            <Alert.Message>Danger Alert</Alert.Message>
          </Alert.Root>
        </div>
        <div className="flex flex-col w-full gap-2">
          <Alert.Root size="sm" type="success">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
          <Alert.Root size="sm" type="warning">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
          <Alert.Root size="sm" type="info">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
          <Alert.Root size="sm" type="danger">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
        </div>
        <div className="flex flex-col w-full gap-2">
          <Alert.Root icon size="sm" type="success">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
          <Alert.Root icon size="sm" type="warning">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
          <Alert.Root icon size="sm" type="info">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
          <Alert.Root icon size="sm" type="danger">
            <Alert.Title>Title</Alert.Title>
            <Alert.Message>My Message</Alert.Message>
          </Alert.Root>
        </div>
      </div>
      <div className="flex bg-default-900 p-10">
        <Select>
          <SelectItem value="teste1">Item 01</SelectItem>
          <SelectItem value="teste2">Item 02</SelectItem>
          <SelectItem value="teste3">Item 03</SelectItem>
        </Select>
      </div>
      <div className="w-full flex bg-default-900 h-screen p-10">
        <div className="bg-default-[#222] w-full p-10 h-screen">
          <div>
            <span className="text-white">Buttons</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs">Solid</Button>
                <Button size="sm">Solid</Button>
                <Button size="md">Solid</Button>
                <Button size="lg">Solid</Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" variant="border" type="submit">
                  Border
                </Button>
                <Button size="sm" variant="border">
                  Border
                </Button>
                <Button size="md" variant="border">
                  Border
                </Button>
                <Button size="lg" variant="border">
                  Border
                </Button>
              </div>
            </div>
            <span className="text-white mt-10 flex">Buttons Left Icon</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="sm" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="md" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="lg" leftIcon={<FaPlus />}>
                  Solid
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" variant="border" leftIcon={<FaPlus />}>
                  Border
                </Button>
                <Button size="sm" variant="border" leftIcon={<FaPlus />}>
                  Border
                </Button>
                <Button size="md" variant="border" leftIcon={<FaPlus />}>
                  Border
                </Button>
                <Button size="lg" variant="border" leftIcon={<FaPlus />}>
                  Border
                </Button>
              </div>
            </div>
            <span className="text-white mt-10 flex">Buttons Right Icon</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" rightIcon={<FaPlus />}>
                  Label
                </Button>
                <Button size="sm" rightIcon={<FaPlus />}>
                  Label
                </Button>
                <Button size="md" rightIcon={<FaPlus />}>
                  Label
                </Button>
                <Button size="lg" rightIcon={<FaPlus />}>
                  Label
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" variant="border" rightIcon={<FaPlus />}>
                  Border
                </Button>
                <Button size="sm" variant="border" rightIcon={<FaPlus />}>
                  Border
                </Button>
                <Button size="md" variant="border" rightIcon={<FaPlus />}>
                  Border
                </Button>
                <Button size="lg" variant="border" rightIcon={<FaPlus />}>
                  Border
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-10 h-screen">
          <div>
            <span className="text-white">Buttons</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="primary">
                  Label
                </Button>
                <Button size="sm" color="primary">
                  Label
                </Button>
                <Button size="md" color="primary">
                  Label
                </Button>
                <Button size="lg" color="primary">
                  Label
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="primary" variant="border">
                  Border
                </Button>
                <Button size="sm" color="primary" variant="border">
                  Border
                </Button>
                <Button size="md" color="primary" variant="border">
                  Border
                </Button>
                <Button size="lg" color="primary" variant="border">
                  Border
                </Button>
              </div>
            </div>
            <span className="text-white mt-10 flex">Buttons Left Icon</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="primary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="sm" color="primary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="md" color="primary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="lg" color="primary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  size="xs"
                  color="primary"
                  variant="border"
                  leftIcon={<FaPlus />}
                >
                  Border
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  variant="border"
                  leftIcon={<FaPlus />}
                >
                  Border
                </Button>
                <Button
                  size="md"
                  color="primary"
                  variant="border"
                  leftIcon={<FaPlus />}
                >
                  Border
                </Button>
                <Button
                  size="lg"
                  color="primary"
                  variant="border"
                  leftIcon={<FaPlus />}
                >
                  Border
                </Button>
              </div>
            </div>

            <span className="text-white mt-10 flex">Buttons Right Icon</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="primary" rightIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="sm" color="primary" rightIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="md" color="primary" rightIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="lg" color="primary" rightIcon={<FaPlus />}>
                  Solid
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  size="xs"
                  color="primary"
                  variant="border"
                  rightIcon={<FaPlus />}
                >
                  Border
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  variant="border"
                  rightIcon={<FaPlus />}
                >
                  Border
                </Button>
                <Button
                  size="md"
                  color="primary"
                  variant="border"
                  rightIcon={<FaPlus />}
                >
                  Border
                </Button>
                <Button
                  size="lg"
                  color="primary"
                  variant="border"
                  rightIcon={<FaPlus />}
                >
                  Border
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full p-10 h-screen">
          <div>
            <span className="text-white">Buttons</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="secondary">
                  Solid
                </Button>
                <Button size="sm" color="secondary">
                  Solid
                </Button>
                <Button size="md" color="secondary">
                  Solid
                </Button>
                <Button size="lg" color="secondary">
                  Solid
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="secondary" variant="border">
                  Border
                </Button>
                <Button size="sm" color="secondary" variant="border">
                  Border
                </Button>
                <Button size="md" color="secondary" variant="border">
                  Border
                </Button>
                <Button size="lg" color="secondary" variant="border">
                  Border
                </Button>
              </div>
            </div>
            <span className="text-white mt-10 flex">Buttons Left Icon</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="secondary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="sm" color="secondary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="md" color="secondary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
                <Button size="lg" color="secondary" leftIcon={<FaPlus />}>
                  Solid
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  size="xs"
                  color="secondary"
                  leftIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
                <Button
                  size="sm"
                  color="secondary"
                  leftIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
                <Button
                  size="md"
                  color="secondary"
                  leftIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
                <Button
                  size="lg"
                  color="secondary"
                  leftIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
              </div>
            </div>
            <span className="text-white mt-10 flex">Buttons Right Icon</span>
            <div className="flex gap-4">
              <div className="mt-4 flex flex-col gap-2">
                <Button size="xs" color="secondary" rightIcon={<FaPlus />}>
                  Label
                </Button>
                <Button size="sm" color="secondary" rightIcon={<FaPlus />}>
                  Label
                </Button>
                <Button size="md" color="secondary" rightIcon={<FaPlus />}>
                  Label
                </Button>
                <Button size="lg" color="secondary" rightIcon={<FaPlus />}>
                  Label
                </Button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  size="xs"
                  color="secondary"
                  rightIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
                <Button
                  size="sm"
                  color="secondary"
                  rightIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
                <Button
                  size="md"
                  color="secondary"
                  rightIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
                <Button
                  size="lg"
                  color="secondary"
                  rightIcon={<FaPlus />}
                  variant="border"
                >
                  Border
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-10 h-screen">
          <div className="flex gap-2 flex-col">
            <span className="text-white mb-4 flex">Text Input</span>
            <div className="flex gap-4">
              <TextField.Root size="sm">
                <TextField.Text placeholder="Placeholder input" />
              </TextField.Root>
            </div>
            <div className="flex gap-4">
              <TextField.Root size="md">
                <TextField.Text placeholder="Placeholder input" />
              </TextField.Root>
            </div>
            <div className="flex gap-4">
              <TextField.Root size="lg">
                <TextField.Text placeholder="Placeholder input" />
              </TextField.Root>
            </div>
            <div className="flex gap-4 mt-8">
              <TextField.Root size="sm">
                <TextField.Icon>
                  <FaUserAlt />
                </TextField.Icon>
                <TextField.Text placeholder="Placeholder input" />
              </TextField.Root>
            </div>
            <div className="flex gap-4">
              <TextField.Root size="md">
                <TextField.Icon>
                  <FaUserAlt />
                </TextField.Icon>
                <TextField.Text placeholder="Placeholder input" />
              </TextField.Root>
            </div>
            <div className="flex gap-4">
              <TextField.Root size="lg">
                <TextField.Icon>
                  <FaUserAlt />
                </TextField.Icon>
                <TextField.Text placeholder="Placeholder input" />
              </TextField.Root>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
